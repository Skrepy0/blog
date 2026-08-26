<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { CourseData } from '../utils/interface.js'

interface ScheduleConfig {
  firstCourseBeginTime: string
  courseDuration: number
  forenoonCourseCount: number
  firstAfternoonCourseBeginTime: string
  afternoonCourseCount: number
  eveningCourseCount: number
  firstEveningCourseBeginTime: string
  firstWeekBeginTime: string
  totalWeek: number
}

const scheduleConfig = ref<ScheduleConfig | null>(null)
const courseData = ref<CourseData[]>([])
const router = useRouter()

// 返回首页
const goHome = () => {
  router.push('/')
}

onMounted(async () => {
  const [configRes, dataRes] = await Promise.all([fetch('/assets/data/schedule-config.json'), fetch('/assets/data/schedule-data.json')])
  scheduleConfig.value = await configRes.json()
  courseData.value = await dataRes.json()
})

// 显示模式: 'current' 仅本周, 'all' 全部
const displayMode = ref<'current' | 'all'>((localStorage.getItem('schedule-display-mode') as 'current' | 'all') || 'current')
const showDropdown = ref(false)

// 当前查看的周数（用于滑动切换）
const viewWeek = ref(0) // 0 表示当前周

// 持久化显示模式
const saveDisplayMode = (mode: 'current' | 'all') => {
  localStorage.setItem('schedule-display-mode', mode)
}

// 星期名称
const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

// 计算总节数
const totalCourses = computed(() => {
  if (!scheduleConfig.value) return 0
  return scheduleConfig.value.forenoonCourseCount + scheduleConfig.value.afternoonCourseCount + scheduleConfig.value.eveningCourseCount
})

// 计算每节课的开始和结束时间
const courseTimes = computed(() => {
  const times: { start: string; end: string }[] = []
  if (!scheduleConfig.value) return times

  const config = scheduleConfig.value
  const parseTime = (time: string) => {
    const [h, m] = time.split(':').map(Number)
    return h * 60 + m
  }
  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  }

  // 上午课程
  let startTime = parseTime(config.firstCourseBeginTime)
  for (let i = 0; i < config.forenoonCourseCount; i++) {
    const start = formatTime(startTime)
    const end = formatTime(startTime + config.courseDuration)
    times.push({ start, end })
    startTime += config.courseDuration + 10 // 10分钟休息
  }

  // 下午课程
  startTime = parseTime(config.firstAfternoonCourseBeginTime)
  for (let i = 0; i < config.afternoonCourseCount; i++) {
    const start = formatTime(startTime)
    const end = formatTime(startTime + config.courseDuration)
    times.push({ start, end })
    startTime += config.courseDuration + 10
  }

  // 晚上课程
  startTime = parseTime(config.firstEveningCourseBeginTime)
  for (let i = 0; i < config.eveningCourseCount; i++) {
    const start = formatTime(startTime)
    const end = formatTime(startTime + config.courseDuration)
    times.push({ start, end })
    startTime += config.courseDuration + 10
  }

  return times
})

// 计算当前周数
const currentWeek = computed(() => {
  if (!scheduleConfig.value) return 1
  const firstDay = new Date(scheduleConfig.value.firstWeekBeginTime)
  const today = new Date()
  const diffTime = today.getTime() - firstDay.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const week = Math.floor(diffDays / 7) + 1
  return Math.max(1, Math.min(week, scheduleConfig.value.totalWeek))
})

// 实际显示的周数
const displayWeek = computed(() => {
  if (!scheduleConfig.value) return 1
  if (viewWeek.value === 0) return currentWeek.value
  return Math.max(1, Math.min(currentWeek.value + viewWeek.value, scheduleConfig.value.totalWeek))
})

// 当前查看周的日期范围
const weekDateRange = computed(() => {
  if (!scheduleConfig.value) return ''
  const firstDay = new Date(scheduleConfig.value.firstWeekBeginTime)
  const monday = new Date(firstDay.getTime() + (displayWeek.value - 1) * 7 * 24 * 60 * 60 * 1000)
  const sunday = new Date(monday.getTime() + 6 * 24 * 60 * 60 * 1000)
  const formatDate = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`
  return `${formatDate(monday)} - ${formatDate(sunday)}`
})

// 当前月份
const currentMonth = computed(() => {
  const today = new Date()
  return `${today.getMonth() + 1}月`
})

// 过滤后的课程
const filteredCourses = computed(() => {
  if (displayMode.value === 'all') return courseData.value
  return courseData.value.filter((course) => course.weekTime.includes(displayWeek.value))
})

// 课程块信息接口
interface CourseBlock {
  course: CourseData
  startPeriod: number
  span: number
  day: number
  isActiveWeek: boolean // 当前周是否上这门课
}

// 计算课程块 (合并连续节次)
const courseBlocks = computed(() => {
  const blocks: CourseBlock[] = []

  filteredCourses.value.forEach((course) => {
    const isActiveWeek = course.weekTime.includes(displayWeek.value)
    course.dayTime.forEach((dt) => {
      const times = [...(dt.time as number[])].sort((a: number, b: number) => a - b)
      // 找出连续段
      let start = times[0]
      let prev = times[0]

      for (let i = 1; i < times.length; i++) {
        if (times[i] === prev + 1) {
          prev = times[i]
        } else {
          blocks.push({
            course,
            startPeriod: start,
            span: prev - start + 1,
            day: dt.day,
            isActiveWeek,
          })
          start = times[i]
          prev = times[i]
        }
      }
      blocks.push({
        course,
        startPeriod: start,
        span: prev - start + 1,
        day: dt.day,
        isActiveWeek,
      })
    })
  })

  return blocks
})

// 切换显示模式
const toggleDisplayMode = (mode: 'current' | 'all') => {
  displayMode.value = mode
  saveDisplayMode(mode)
  showDropdown.value = false
}

// 点击外部关闭下拉菜单
const handleClickOutside = () => {
  showDropdown.value = false
}

// 滑动切换周数
const touchStartX = ref(0)
const touchStartY = ref(0)
const isSwiping = ref(false)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
  isSwiping.value = true
}

const handleTouchEnd = (e: TouchEvent) => {
  if (!isSwiping.value) return
  isSwiping.value = false

  const touchEndX = e.changedTouches[0].clientX
  const touchEndY = e.changedTouches[0].clientY
  const diffX = touchEndX - touchStartX.value
  const diffY = touchEndY - touchStartY.value

  // 水平滑动距离大于50且大于垂直滑动距离
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      // 向左滑动，下一周
      prevWeek()
    } else {
      // 向右滑动，上一周
      nextWeek()
    }
  }
}

// 上一周
const prevWeek = () => {
  if (!scheduleConfig.value) return
  if (displayWeek.value < scheduleConfig.value.totalWeek) {
    viewWeek.value += 1
  }
}

// 下一周
const nextWeek = () => {
  if (displayWeek.value > 1) {
    viewWeek.value -= 1
  }
}

// 回到当前周
const goToCurrentWeek = () => {
  viewWeek.value = 0
}

// 课程详情弹窗
const selectedCourse = ref<CourseData | null>(null)
const showCopyMenu = ref(false)

// 格式化周数显示
const formatWeeks = (weeks: number[]): string => {
  if (!weeks.length) return ''
  const sorted = [...weeks].sort((a, b) => a - b)
  const result: string[] = []
  let start = sorted[0]
  let prev = sorted[0]

  for (let i = 1; i <= sorted.length; i++) {
    if (i < sorted.length && sorted[i] === prev + 1) {
      prev = sorted[i]
    } else {
      // 检查是否为单双周
      if (start === prev) {
        result.push(`第${start}周`)
      } else {
        // 检查是否全为奇数或全为偶数
        const range = Array.from({ length: prev - start + 1 }, (_, idx) => start + idx)
        const allOdd = range.every((w) => w % 2 === 1)
        const allEven = range.every((w) => w % 2 === 0)
        if (allOdd && prev - start >= 1) {
          result.push(`第${start}-${prev}周, 单周`)
        } else if (allEven && prev - start >= 1) {
          result.push(`第${start}-${prev}周, 双周`)
        } else {
          result.push(`第${start}-${prev}周`)
        }
      }
      if (i < sorted.length) {
        start = sorted[i]
        prev = sorted[i]
      }
    }
  }
  return result.join(', ')
}

// 格式化时间显示
const formatTimeRange = (periods: number[]): string => {
  if (!periods.length || !courseTimes.value.length) return ''
  const sorted = [...periods].sort((a, b) => a - b)
  const startPeriod = sorted[0]
  const endPeriod = sorted[sorted.length - 1]
  const startTime = courseTimes.value[startPeriod - 1]?.start || ''
  const endTime = courseTimes.value[endPeriod - 1]?.end || ''
  return `第${startPeriod}-${endPeriod}节    ${startTime}-${endTime}`
}

// 打开课程详情
const openCourseDetail = (course: CourseData) => {
  selectedCourse.value = course
  showCopyMenu.value = false
}

// 关闭课程详情
const closeCourseDetail = () => {
  selectedCourse.value = null
  showCopyMenu.value = false
}

// 复制课程信息
const copySuccess = ref(false)
const copyCourseInfo = (type: 'name' | 'full') => {
  if (!selectedCourse.value) return
  const course = selectedCourse.value
  let text = ''
  if (type === 'name') {
    text = course.name
  } else {
    const lines = [
      course.name,
      `周次: ${formatWeeks(course.weekTime)}`,
      course.dayTime
        .map((dt) => {
          const dayName = weekDays[dt.day - 1] || ''
          return `${dayName} ${formatTimeRange(dt.time as number[])}`
        })
        .join('\n'),
      `地点: @${course.location}`,
      course.teachers?.length ? `教师: ${course.teachers.join(', ')}` : '',
      course.credit ? `学分: ${course.credit}` : '',
      course.remarks?.length ? `备注: ${course.remarks.join('\n')}` : '',
    ].filter(Boolean)
    text = lines.join('\n')
  }
  navigator.clipboard.writeText(text).then(() => {
    showCopyMenu.value = false
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  })
}
</script>

<template>
  <div class="schedule-container" @click="handleClickOutside">
    <!-- 加载中 -->
    <div v-if="!scheduleConfig" class="loading">加载中...</div>
    <!-- 表头 -->
    <template v-else>
      <div class="schedule-header">
        <div class="header-left">
          <div class="week-nav">
            <button class="nav-btn" @click="nextWeek" :disabled="displayWeek <= 1">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <span class="week-text" @click="goToCurrentWeek"> 第{{ displayWeek }}周 </span>
            <button class="nav-btn" @click="prevWeek" :disabled="displayWeek >= (scheduleConfig?.totalWeek ?? 0)">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
          <div class="header-info">
            <span v-if="viewWeek !== 0" class="not-current-week">(非当前周)</span>
            <span class="date-text">{{ weekDateRange }}</span>
          </div>
        </div>
        <div class="header-right">
          <button class="home-btn" @click="goHome" title="返回首页">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>
          <div class="dropdown-wrapper">
            <button class="dropdown-btn" @click.stop="showDropdown = !showDropdown">
              <span>设置</span>
              <svg class="dropdown-arrow" :class="{ open: showDropdown }" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div v-show="showDropdown" class="dropdown-menu">
              <div class="dropdown-item" :class="{ active: displayMode === 'current' }" @click="toggleDisplayMode('current')">
                仅显示本周课程
              </div>
              <div class="dropdown-item" :class="{ active: displayMode === 'all' }" @click="toggleDisplayMode('all')">显示全部课程</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 课程表主体 -->
      <div class="schedule-body" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <div class="schedule-grid">
          <!-- 星期行 -->
          <div class="grid-header">
            <div class="corner-cell">
              <span class="month-text">{{ currentMonth }}</span>
            </div>
            <div v-for="(day, index) in weekDays" :key="index" class="day-cell">
              {{ day }}
            </div>
          </div>

          <!-- 课程行 -->
          <div class="grid-body">
            <!-- 左侧节数和时间列 -->
            <div class="time-column">
              <div v-for="period in totalCourses" :key="period" class="time-cell">
                <div class="period-number">{{ period }}</div>
                <div class="period-time">
                  <span>{{ courseTimes[period - 1]?.start }}</span>
                  <span>{{ courseTimes[period - 1]?.end }}</span>
                </div>
              </div>
            </div>

            <!-- 课程网格 -->
            <div class="course-grid">
              <!-- 背景网格线 -->
              <div class="grid-background">
                <div v-for="period in totalCourses" :key="period" class="grid-row"></div>
              </div>

              <!-- 课程块 -->
              <div
                v-for="block in courseBlocks"
                :key="`${block.course.name}-${block.day}-${block.startPeriod}`"
                class="course-block"
                :style="{
                  gridColumn: block.day,
                  gridRow: `${block.startPeriod} / span ${block.span}`,
                  backgroundColor: block.course.displayColor,
                  opacity: block.isActiveWeek ? 1 : 0.4,
                }"
                @click.stop="openCourseDetail(block.course)"
              >
                <div class="course-type-badge">{{ block.course.type }}</div>
                <div class="course-name">{{ block.course.name }}</div>
                <div class="course-teacher">{{ block.course.teachers?.join(', ') }}</div>
                <div class="course-location">@{{ block.course.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- 课程详情弹窗 -->
    <Teleport to="body">
      <div v-if="selectedCourse" class="modal-overlay" @click="closeCourseDetail">
        <div class="modal-card" @click.stop>
          <div class="modal-header">
            <div class="modal-color-indicator" :style="{ backgroundColor: selectedCourse.displayColor }"></div>
            <div class="modal-course-name">{{ selectedCourse.name }}</div>
          </div>
          <div class="modal-divider"></div>
          <div class="modal-body">
            <div class="modal-item">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
                  />
                </svg>
              </span>
              <span class="modal-value">{{ formatWeeks(selectedCourse.weekTime) }}</span>
            </div>
            <div class="modal-item">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  />
                </svg>
              </span>
              <span class="modal-value">
                <div v-for="(dt, idx) in selectedCourse.dayTime" :key="idx">
                  {{ weekDays[dt.day - 1] }} {{ formatTimeRange(dt.time as number[]) }}
                </div>
              </span>
            </div>
            <div class="modal-item">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
              </span>
              <span class="modal-value">@{{ selectedCourse.location }}</span>
            </div>
            <div class="modal-item" v-if="selectedCourse.teachers?.length">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </span>
              <span class="modal-value">{{ selectedCourse.teachers.join(', ') }}</span>
            </div>
            <div class="modal-item" v-if="selectedCourse.credit">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
              <span class="modal-value">{{ selectedCourse.credit }}</span>
            </div>
            <div class="modal-item" v-if="selectedCourse.remarks?.length">
              <span class="modal-icon">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                  />
                </svg>
              </span>
              <span class="modal-value">{{ selectedCourse.remarks.join('\n') }}</span>
            </div>
          </div>
          <div class="modal-footer">
            <div class="copy-wrapper">
              <button class="btn-copy" @click="showCopyMenu = !showCopyMenu">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path
                    fill="currentColor"
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  />
                </svg>
                复制
              </button>
              <div v-show="showCopyMenu" class="copy-menu">
                <div class="copy-item" @click="copyCourseInfo('name')">复制课程名称</div>
                <div class="copy-item" @click="copyCourseInfo('full')">复制完整课程</div>
              </div>
            </div>
            <button class="btn-confirm" @click="closeCourseDetail">确定</button>
          </div>
          <!-- 复制成功提示 -->
          <transition name="fade">
            <div v-if="copySuccess" class="copy-toast">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              复制成功
            </div>
          </transition>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.schedule-container {
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  font-family: 'Comic', 'HYTangMeiRen', sans-serif;
  box-sizing: border-box;
}

.loading {
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-mute, #666);
}

// 表头
.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft, #f5f5f5);
  border-radius: 12px 12px 0 0;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
  border-bottom: none;

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .week-nav {
      display: flex;
      align-items: center;
      gap: 8px;

      .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        padding: 0;
        background: transparent;
        border: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
        border-radius: 6px;
        cursor: pointer;
        color: var(--vp-c-text, #2c3e50);
        transition: all 0.2s;

        &:hover:not(:disabled) {
          background: var(--vp-c-bg-soft, #f5f5f5);
        }

        &:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      }

      .week-text {
        font-size: 18px;
        font-weight: 600;
        color: var(--vp-c-text, #2c3e50);
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 6px;
        transition: background 0.2s;

        &:hover {
          background: color-mix(in srgb, var(--vp-c-accent, #19ffd5) 10%, transparent);
        }
      }
    }

    .header-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .not-current-week {
      font-size: 12px;
      font-weight: 400;
      color: var(--vp-c-text-mute, #666);
      margin-left: 4px;
    }

    .date-text {
      font-size: 14px;
      color: var(--vp-c-text-mute, #666);
    }
  }

  .header-right {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    position: relative;

    .home-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      padding: 0;
      background: var(--vp-c-bg, #fff);
      border: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
      border-radius: 8px;
      cursor: pointer;
      color: var(--vp-c-text, #2c3e50);
      transition: all 0.2s;
      margin-top: 2px;

      &:hover {
        background: var(--vp-c-bg-soft, #f5f5f5);
      }
    }
  }
}

// 下拉按钮
.dropdown-wrapper {
  position: relative;
}

.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background: var(--vp-c-bg, #fff);
  border: 1px solid var(--vp-c-divider, #e0e0e0);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text, #2c3e50);
  transition: all 0.2s;

  &:hover {
    background: var(--vp-c-bg-soft, #f5f5f5);
  }

  .dropdown-arrow {
    transition: transform 0.2s;

    &.open {
      transform: rotate(180deg);
    }
  }
}

// 下拉菜单
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: var(--vp-c-bg, #fff);
  border: 1px solid var(--vp-c-divider, #e0e0e0);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 160px;
  overflow: hidden;
}

.dropdown-item {
  padding: 10px 16px;
  font-size: 14px;
  color: var(--vp-c-text, #2c3e50);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--vp-c-bg-soft, #f5f5f5);
  }

  &.active {
    color: var(--vp-c-accent, #19ffd5);
    background: color-mix(in srgb, var(--vp-c-accent, #19ffd5) 10%, transparent);
  }
}

// 课程表主体
.schedule-body {
  border: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
  border-radius: 0 0 12px 12px;
  overflow: hidden;
}

.schedule-grid {
  display: flex;
  flex-direction: column;
}

// 星期行
.grid-header {
  display: flex;
  background: var(--vp-c-bg-soft, #f5f5f5);
  border-bottom: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);

  .corner-cell {
    width: 64px;
    min-width: 64px;
    padding: 12px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
    box-sizing: border-box;

    .month-text {
      font-size: 14px;
      font-weight: 500;
      color: var(--vp-c-text, #2c3e50);
    }
  }

  .day-cell {
    flex: 1;
    padding: 12px 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text, #2c3e50);
    border-right: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);

    &:last-child {
      border-right: none;
    }
  }
}

// 课程网格主体
.grid-body {
  display: flex;
  position: relative;
}

// 时间列
.time-column {
  width: 64px;
  min-width: 64px;
  border-right: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
  background: var(--vp-c-bg-soft, #f5f5f5);

  .time-cell {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid color-mix(in srgb, var(--vp-c-divider, #e0e0e0) 50%, transparent);
    gap: 2px;

    &:last-child {
      border-bottom: none;
    }

    .period-number {
      font-size: 14px;
      font-weight: 600;
      color: var(--vp-c-text, #2c3e50);
    }

    .period-time {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 10px;
      color: var(--vp-c-text-mute, #666);
      line-height: 1.2;
    }
  }
}

// 课程网格
.course-grid {
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(v-bind(totalCourses), 80px);
  gap: 2px;
  padding: 0 2px 2px 0;
}

.grid-background {
  display: contents;
  pointer-events: none;

  .grid-row {
    display: none;
  }
}

// 课程块
.course-block {
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: -2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }

  .course-type-badge {
    display: inline-block;
    align-self: flex-start;
    padding: 2px 6px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
  }

  .course-name {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
    word-break: break-all;
  }

  .course-teacher {
    font-size: 11px;
    opacity: 0.9;
  }

  .course-location {
    font-size: 11px;
    opacity: 0.9;
    margin-top: auto;
  }
}

// 暗色模式适配
[data-theme='dark'] {
  .schedule-header {
    background: var(--vp-c-bg-soft, #1b1c24);
    border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);

    .header-left {
      .week-nav {
        .nav-btn {
          border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);
          color: var(--vp-c-text, #e0e0e0);

          &:hover:not(:disabled) {
            background: var(--vp-c-bg-soft, #2c2c34);
          }
        }

        .week-text {
          color: var(--vp-c-text, #e0e0e0);
        }
      }
    }

    .header-right {
      .home-btn {
        border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);
        color: var(--vp-c-text, #e0e0e0);
        background: var(--vp-c-bg, #1b1b1f);
        margin-top: 2px;

        &:hover {
          background: var(--vp-c-bg-soft, #2c2c34);
        }
      }
    }
  }

  .dropdown-btn {
    background: var(--vp-c-bg, #1b1b1f);
    border-color: var(--vp-c-divider, #333);
    color: var(--vp-c-text, #e0e0e0);

    &:hover {
      background: var(--vp-c-bg-soft, #1b1c24);
    }
  }

  .dropdown-menu {
    background: var(--vp-c-bg, #1b1b1f);
    border-color: var(--vp-c-divider, #333);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .dropdown-item {
    color: var(--vp-c-text, #e0e0e0);

    &:hover {
      background: var(--vp-c-bg-soft, #1b1c24);
    }
  }

  .schedule-body {
    border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);
  }

  .grid-header {
    background: var(--vp-c-bg-soft, #1b1c24);
    border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);

    .corner-cell,
    .day-cell {
      border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);
      color: var(--vp-c-text, #e0e0e0);
    }
  }

  .time-column {
    background: var(--vp-c-bg-soft, #1b1c24);
    border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);

    .time-cell {
      border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);

      .period-number {
        color: var(--vp-c-text, #e0e0e0);
      }
    }
  }

  .grid-background .grid-row {
    border-color: color-mix(in srgb, var(--vp-c-divider, #333) 50%, transparent);
  }
}

// 响应式
@media (max-width: 768px) {
  .schedule-container {
    padding: 8px;
  }

  .schedule-header {
    padding: 10px 12px;

    .header-left {
      .week-nav .week-text {
        font-size: 16px;
      }
    }

    .header-right {
      .home-btn {
        width: 32px;
        height: 32px;
      }
    }
  }

  .time-column {
    width: 44px;
    min-width: 44px;

    .time-cell {
      height: 60px;

      .period-number {
        font-size: 11px;
      }

      .period-time {
        font-size: 8px;
      }
    }
  }

  .grid-header .corner-cell {
    width: 44px;
    min-width: 44px;

    .month-text {
      font-size: 12px;
      white-space: nowrap;
    }
  }

  .grid-header .day-cell {
    font-size: 12px;
    padding: 8px 2px;
  }

  .course-grid {
    grid-template-rows: repeat(v-bind(totalCourses), 60px);
  }

  .course-block {
    padding: 4px;
    border-radius: 6px;
    outline-width: 1px;

    .course-type-badge {
      font-size: 8px;
      padding: 1px 4px;
    }

    .course-name {
      font-size: 10px;
      line-height: 1.2;
    }

    .course-teacher {
      font-size: 9px;
    }

    .course-location {
      font-size: 9px;
    }
  }
}

@media (max-width: 480px) {
  .schedule-container {
    padding: 4px;
  }

  .schedule-header {
    padding: 8px 10px;
    border-radius: 8px 8px 0 0;

    .header-left {
      gap: 2px;

      .week-nav .week-text {
        font-size: 14px;
      }

      .date-text {
        font-size: 12px;
      }
    }

    .header-right {
      .home-btn {
        width: 28px;
        height: 28px;
      }
    }
  }

  .dropdown-btn {
    padding: 6px 10px;
    font-size: 12px;
  }

  .time-column {
    width: 28px;
    min-width: 28px;

    .time-cell {
      height: 50px;

      .period-number {
        font-size: 10px;
      }

      .period-time {
        font-size: 7px;
      }
    }
  }

  .grid-header .corner-cell {
    width: 28px;
    min-width: 28px;

    .month-text {
      font-size: 10px;
    }
  }

  .grid-header .day-cell {
    font-size: 10px;
    padding: 6px 1px;
  }

  .course-grid {
    grid-template-rows: repeat(v-bind(totalCourses), 50px);
    gap: 1px;
    padding: 0 1px 1px 0;
  }

  .course-block {
    padding: 3px;
    border-radius: 4px;
    gap: 2px;

    .course-type-badge {
      font-size: 7px;
      padding: 1px 3px;
    }

    .course-name {
      font-size: 9px;
    }

    .course-teacher {
      font-size: 8px;
    }

    .course-location {
      font-size: 8px;
    }
  }
}

// 课程详情弹窗
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal-card {
  background: var(--vp-c-bg, #fff);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 16px 16px 0 0;
  background: var(--vp-c-bg-soft, #f5f5f5);
  color: var(--vp-c-text, #2c3e50);

  .modal-color-indicator {
    width: 4px;
    height: 24px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .modal-course-name {
    font-size: 20px;
    font-weight: 600;
  }
}

.modal-divider {
  height: 1px;
  background: var(--vp-c-divider, #e0e0e0);
  margin: 0 20px;
}

.modal-body {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;

  .modal-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--vp-c-accent, #19ffd5) 10%, transparent);
    color: var(--vp-c-accent, #19ffd5);
    flex-shrink: 0;
  }

  .modal-value {
    font-size: 14px;
    color: var(--vp-c-text, #2c3e50);
    flex: 1;
    line-height: 1.5;
    padding-top: 4px;
  }
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--vp-c-divider, #e0e0e0);
  position: relative;

  .copy-wrapper {
    position: relative;

    .btn-copy {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      background: var(--vp-c-bg-soft, #f5f5f5);
      border: 1px solid var(--vp-c-divider, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      color: var(--vp-c-text, #2c3e50);
      transition: all 0.2s;

      &:hover {
        background: var(--vp-c-divider, #e0e0e0);
      }
    }

    .copy-menu {
      position: absolute;
      bottom: 100%;
      left: 0;
      margin-bottom: 4px;
      background: var(--vp-c-bg, #fff);
      border: 1px solid var(--vp-c-divider, #e0e0e0);
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      min-width: 120px;
    }

    .copy-item {
      padding: 10px 16px;
      font-size: 14px;
      color: var(--vp-c-text, #2c3e50);
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: var(--vp-c-bg-soft, #f5f5f5);
      }
    }
  }

  .btn-confirm {
    padding: 8px 20px;
    background: var(--vp-c-accent, #19ffd5);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
}

// 暗色模式弹窗
[data-theme='dark'] {
  .modal-card {
    background: var(--vp-c-bg, #1b1b1f);
  }

  .modal-header {
    background: var(--vp-c-bg-soft, #2c2c34);
    color: var(--vp-c-text, #e0e0e0);
  }

  .modal-divider {
    background: var(--vp-c-divider, #333);
  }

  .modal-item {
    .modal-icon {
      background: color-mix(in srgb, var(--vp-c-accent, #19ffd5) 20%, transparent);
      color: var(--vp-c-accent, #19ffd5);
    }

    .modal-value {
      color: var(--vp-c-text, #e0e0e0);
    }
  }

  .modal-footer {
    border-top-color: var(--vp-c-divider, #333);

    .copy-wrapper {
      .btn-copy {
        background: var(--vp-c-bg-soft, #2c2c34);
        border-color: var(--vp-c-divider, #333);
        color: var(--vp-c-text, #e0e0e0);

        &:hover {
          background: var(--vp-c-divider, #333);
        }
      }

      .copy-menu {
        background: var(--vp-c-bg, #1b1b1f);
        border-color: var(--vp-c-divider, #333);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      .copy-item {
        color: var(--vp-c-text, #e0e0e0);

        &:hover {
          background: var(--vp-c-bg-soft, #2c2c34);
        }
      }
    }
  }

  .copy-toast {
    background: var(--vp-c-bg-soft, #2c2c34);
    color: var(--vp-c-text, #e0e0e0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

// 响应式
@media (max-width: 480px) {
  .modal-card {
    max-width: 100%;
  }

  .modal-header {
    padding: 14px 16px;

    .modal-course-name {
      font-size: 18px;
    }
  }

  .modal-body {
    padding: 14px 16px;
  }

  .modal-footer {
    padding: 14px 16px;
  }
}

// 复制成功提示
.copy-toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: var(--vp-c-bg, #fff);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  color: var(--vp-c-text, #2c3e50);
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
