import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import test from 'node:test'
import { transformSync } from 'esbuild'
import { ref, computed, nextTick } from 'vue'

process.env.TZ = 'Asia/Shanghai'
const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8')
const source = read('../src/.vuepress/pages/ClassSchedule.vue')
  .split('<script setup lang="ts">')[1]
  .split('</script>')[0]
  .replace(/^import .*$/gm, '')
const helpers = read('../src/.vuepress/utils/functions.ts')
  .replace(/^import .*$/gm, '')
  .replace(/export /g, '')
const config = JSON.parse(read('../src/.vuepress/public/assets/data/schedule-config.json'))
const data = JSON.parse(read('../src/.vuepress/public/assets/data/schedule-data.json'))

// Execute the component's actual setup logic, with only browser/lifecycle boundaries stubbed.
async function setup(now = '2026-10-26T12:00:00+08:00') {
  const mounted = [],
    unmounted = [],
    listeners = new Map(),
    timers = new Map(),
    frames = new Map()
  let callbackId = 0
  class Clock extends Date {
    constructor(...args) {
      super(...(args.length ? args : [now]))
    }
  }
  const context = vm.createContext({
    ref,
    computed,
    nextTick,
    setTimeout: (fn) => {
      timers.set(++callbackId, fn)
      return callbackId
    },
    clearTimeout: (id) => timers.delete(id),
    requestAnimationFrame: (fn) => {
      frames.set(++callbackId, fn)
      return callbackId
    },
    cancelAnimationFrame: (id) => frames.delete(id),
    Date: Clock,
    onMounted: (fn) => mounted.push(fn),
    onUnmounted: (fn) => unmounted.push(fn),
    useRouter: () => ({}),
    localStorage: { getItem: () => null },
    window: {
      innerWidth: 1200,
      addEventListener: (name, fn) => listeners.set(name, fn),
      removeEventListener: (name) => listeners.delete(name),
    },
    fetch: async (url) => ({ json: async () => (url.includes('config') ? structuredClone(config) : structuredClone(data)) }),
  })
  vm.runInContext(
    transformSync(
      `${helpers}\n${source}\nglobalThis.api = { currentWeek, courseBlocks, displayMode, resolveOverlaps, calculateCustomTimeRange,
        displayWeek, viewWeek, swipeOffset, isAnimating, transitionDisabled, prevWeek, nextWeek,
        handleTouchStart, handleTouchMove, handleTouchEnd, resetSwipe };`,
      { loader: 'ts' }
    ).code,
    context
  )
  for (const fn of mounted) await fn()
  return {
    ...context.api,
    resize(width) {
      context.window.innerWidth = width
      listeners.get('resize')?.()
    },
    dispose() {
      unmounted.forEach((fn) => fn())
    },
    listeners,
    timers,
    frames,
    async advanceTimer() {
      const [id, fn] = timers.entries().next().value
      timers.delete(id)
      await fn()
    },
    async advanceFrame() {
      const [id, fn] = frames.entries().next().value
      frames.delete(id)
      fn()
      await nextTick()
    },
  }
}

const block = (name, startPeriod, span, weekTime = [7]) => ({
  course: { ...structuredClone(data[0]), name, weekTime },
  startPeriod,
  span,
  day: 1,
  isActiveWeek: weekTime.includes(7),
})

test('week changes at local Monday midnight', async () => {
  assert.equal((await setup('2026-10-25T23:59:59+08:00')).currentWeek.value, 6)
  assert.equal((await setup('2026-10-26T00:00:00+08:00')).currentWeek.value, 7)
})

test('custom-time positions follow resize at both breakpoints', async () => {
  const app = await setup()
  app.displayMode.value = 'all'
  const course = app.courseBlocks.value.find((b) => b.customTime).course
  for (const [width, expectedTop] of [
    [700, 496],
    [390, 408],
    [1200, 656],
  ]) {
    app.resize(width)
    const actual = app.courseBlocks.value.find((b) => b.course === course)
    const expected = app.calculateCustomTimeRange(actual.customTime)
    assert.equal(actual.customTop, expectedTop)
    assert.equal(actual.customTop, expected.top)
    assert.equal(actual.customHeight, expected.height)
  }
  app.dispose()
  assert.equal(app.listeners.size, 0)
})

test('chain overlaps reuse columns without overflowing the day', async () => {
  const app = await setup()
  const result = app.resolveOverlaps([block('A', 1, 2), block('B', 2, 2), block('C', 3, 2)])
  assert.equal(result.length, 3)
  for (const b of result) {
    assert.equal(b.columnTotal, 2)
    assert.ok(b.columnIndex < b.columnTotal)
  }
  assert.equal(result[0].columnIndex, result[2].columnIndex)
})

test('same-name courses with different weeks remain visible', async () => {
  const app = await setup()
  const result = app.resolveOverlaps([block('Same', 1, 2, [1]), block('Same', 1, 2, [7])])
  assert.equal(result.length, 2)
  assert.ok(result.some((b) => b.isActiveWeek))
})

test('exact duplicate records are collapsed but different locations are retained', async () => {
  const app = await setup(),
    a = block('Same', 1, 2),
    b = structuredClone(a)
  assert.equal(app.resolveOverlaps([a, b]).length, 1)
  b.course.location = 'Another room'
  assert.equal(app.resolveOverlaps([a, b]).length, 2)
})

test('adjacent classes can reuse a column regardless of input order', async () => {
  const app = await setup()
  const result = app.resolveOverlaps([block('C', 3, 2), block('B', 2, 2), block('A', 1, 2)])
  assert.ok(result.every((b) => b.columnTotal === 2 && b.columnIndex < 2))
})

test('each arrow slides out, repositions without transition, then slides in from the opposite side', async () => {
  for (const direction of [1, -1]) {
    const app = await setup()
    const initialWeek = app.displayWeek.value
    ;(direction === 1 ? app.prevWeek : app.nextWeek)()
    assert.equal(app.swipeOffset.value, -direction * 1200)
    assert.equal(app.isAnimating.value, true)
    await app.advanceTimer()
    assert.equal(app.displayWeek.value, initialWeek + direction)
    assert.equal(app.swipeOffset.value, direction * 1200)
    assert.equal(app.transitionDisabled.value, true)
    await app.advanceFrame()
    assert.equal(app.transitionDisabled.value, true)
    await app.advanceFrame()
    assert.equal(app.transitionDisabled.value, false)
    assert.equal(app.swipeOffset.value, 0)
    await app.advanceTimer()
    assert.equal(app.isAnimating.value, false)
    app.dispose()
  }
})

const touch = (x, y = 100) => ({ touches: [{ clientX: x, clientY: y }], changedTouches: [{ clientX: x, clientY: y }] })

test('short swipes and cancelled gestures reset without a rebound animation', async () => {
  const app = await setup()
  app.handleTouchStart(touch(200))
  app.handleTouchMove(touch(180))
  assert.ok(app.swipeOffset.value < 0)
  app.handleTouchEnd(touch(180))
  assert.equal(app.swipeOffset.value, 0)
  assert.equal(app.transitionDisabled.value, true)
  assert.equal(app.timers.size, 0)
  app.handleTouchStart(touch(200))
  app.handleTouchMove(touch(100))
  app.resetSwipe()
  app.handleTouchEnd(touch(100))
  assert.equal(app.timers.size, 0)
  assert.equal(app.transitionDisabled.value, true)
})

test('a swipe beyond the first or last week does not move the timetable', async () => {
  for (const week of [1, config.totalWeek]) {
    const app = await setup()
    app.viewWeek.value = week - app.currentWeek.value
    const end = week === 1 ? 300 : 100
    app.handleTouchStart(touch(200))
    app.handleTouchMove(touch(end))
    assert.equal(app.swipeOffset.value, 0)
    app.handleTouchEnd(touch(end))
    assert.equal(app.displayWeek.value, week)
    assert.equal(app.timers.size, 0)
  }
})

test('unmount cancels slide callbacks and repeated clicks cannot queue week changes', async () => {
  const app = await setup()
  app.prevWeek()
  app.prevWeek()
  assert.equal(app.timers.size, 1)
  await app.advanceTimer()
  assert.equal(app.frames.size, 1)
  app.dispose()
  assert.equal(app.frames.size, 0)
  assert.equal(app.timers.size, 0)
})
