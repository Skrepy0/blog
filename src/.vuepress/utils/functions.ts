import { CourseData, DayTime } from './interface.js'

/**
 * 数组比较
 *
 * @param a 数组1
 * @param b 数组2
 * @param order 是否考虑元素顺序，默认 false
 * @param fn 比较函数，默认使用 ===
 * @returns 两个数组是否相等
 * @author Skrepy
 */
export function isEqual<T>(a: T[], b: T[], order: boolean = false, fn: (a: T, b: T) => boolean = (a, b) => a === b): boolean {
  const len = a.length
  if (b.length !== len) return false

  if (order) {
    for (let i = 0; i < len; i++) {
      if (!fn(a[i], b[i])) return false
    }
    return true
  }

  const used = new Array<boolean>(b.length).fill(false)
  for (let i = 0; i < len; i++) {
    const j = b.findIndex((v, k) => !used[k] && fn(a[i], v))
    if (j === -1) return false
    used[j] = true
  }
  return true
}

export const isSameCourse = (a: CourseData, b: CourseData) => {
  if (
    a.name !== b.name ||
    a.displayColor !== b.displayColor ||
    a.credit !== b.credit ||
    !isEqual(a.weekTime, b.weekTime, false) ||
    !isEqual(a.dayTime, b.dayTime, false) ||
    a.location !== b.location ||
    a.remarks !== b.remarks
  )
    return false
  if (
    !isEqual(a.dayTime, b.dayTime, false, (t1: DayTime, t2: DayTime) => {
      if (t1.day !== t2.day) return false
      if (Array.isArray(t1.time)) {
        if (!Array.isArray(t2.time)) {
          return false
        }
        return isEqual(t1.time, t2.time)
      } else {
        if (Array.isArray(t2.time)) {
          return false
        }
        if (t1.time.classBeginTime !== t2.time.classBeginTime || t1.time.classEndTime !== t2.time.classEndTime) return false
      }
      return true
    })
  )
    return true
}
