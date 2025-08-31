export enum ExamStatusEnum {
  ONLINE = '已上线',
  DOWN = '已下线'
}

export type ExamDataType = {
  id: number
  name: string
  createTime: Date
  onlineTime: Date
  updateTime: Date
  updateComment: string
  status: ExamStatusEnum
  showCourseIntro: boolean
  showLearningFile: boolean
  showExamInformation: boolean
  manager: string
}