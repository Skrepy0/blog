export interface customTime {
  classBeginTime: string
  classEndTime: string
}
export interface DayTime {
  day: number // 周几
  time: number[] | customTime // 第几节
}

export interface CourseData {
  name: string // 课程名称
  displayColor: string // 显示颜色
  credit?: number // 学分
  type?:string//课程类型
  weekTime: number[] // 要上课的周
  dayTime: DayTime[] // 每天的时间
  teachers?: string[] // 上课教师
  location: string // 上课地点
  remarks?: string[] // 备注,每行一个
}
