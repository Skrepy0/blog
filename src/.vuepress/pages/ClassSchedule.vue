<script setup lang="ts">
import { CourseData } from '../utils/interface.js';

const scheduleConfig = {
  firstCourseBeginTime: "08:00",// 上午课程开始时间
  courseDuration: 45,// 每节课时长min
  forenoonCourseCount: 4,// 上午课程数量
  firstAfternoonCourseBeginTime: "14:30",// 下午课程开始时间
  afternoonCourseCount: 4,// 下午课程数量
  eveningCourseCount: 2,// 晚上课程数量
  firstEveningCourseBeginTime: "19:00",// 晚上第一节课开始的时间
  firstWeekBeginTime: "2026-08-26",// 第一周周一的日期
  totalWeek:16,// 学期总周数
}
const courseData: CourseData[] = [
  {
    name: "高等数学",
    displayColor: "#025621",
    credit: 5,
    type:"专业基础",
    weekTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    dayTime: [{
      day: 1,
      time:[1,2]
    }],
    teachers: ["fly"],
    location: "综103",
  }
]
</script>
<template>
  <h1>fly</h1>
</template>
<style lang="sass" scoped></style>
