export enum MenuTypeEnum {
  ALL_PART = 'all-part',
  EXAM_LIST = 'exam-list',
  COURSE_MANAGER = 'course-manager',
  PARSE_MANAGER = 'parse-manager',
  UPDATING_LIST = 'updating-list'
}

export const menuOptionData = [
  { label: '全部分类', key: MenuTypeEnum.ALL_PART },
  { label: '考试列表', key: MenuTypeEnum.EXAM_LIST },
  { label: '科目管理', key: MenuTypeEnum.COURSE_MANAGER },
  { label: '解析管理', key: MenuTypeEnum.PARSE_MANAGER },
  { label: '待更新列表', key: MenuTypeEnum.UPDATING_LIST }
];