export enum MenuTypeEnum {
  ALL_PART = 'all-part',
  EXAM_LIST = 'exam-list',
  COURSE_MANAGER = 'course-manager',
  PARSE_MANAGER = 'parse-manager',
  UPDATING_LIST = 'updating-list',
  EXAM_INTRO_IMAGE = 'exam-intro-image'
}

export const menuOptionData = [
  { label: '全部分类', key: MenuTypeEnum.ALL_PART },
  { label: '考试列表', key: MenuTypeEnum.EXAM_LIST },
  { label: '考试介绍图', key: MenuTypeEnum.EXAM_INTRO_IMAGE }
];