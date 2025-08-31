import { ExamStatusEnum } from '@/server-app/dto/exam.dto';
import { CSSProperties } from 'react';


export const examStatusStyle: Record<ExamStatusEnum, CSSProperties> = {
  [ExamStatusEnum.ONLINE]: { color: '#4B9F47', backgroundColor: '#EDF6ED' },
  [ExamStatusEnum.DOWN]: { color: '#E64361', backgroundColor: '#FFEBF6' }
};


