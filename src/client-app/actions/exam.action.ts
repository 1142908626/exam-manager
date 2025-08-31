import { ExamDataType } from '@/server-app/dto/exam.dto';
import { PaginationType } from '@/server-app/types/pagination.type';
import { message } from 'antd';
import axios from 'axios';

export async function getExamRequest (): Promise<PaginationType<ExamDataType>> {
  const res = await axios.get('/api/exam');
  return res.data;
}

export async function upsertExamRequest (data: ExamDataType): Promise<void> {
  const res = await axios.put<{ message: string }>('/api/exam', data);
  console.log(res);
  message.info(res.data);
}