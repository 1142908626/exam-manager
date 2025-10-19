import { ExamManagerDao } from '@/server-app/database';
import { ExamDataType } from '@/server-app/dto/exam.dto';
import { PaginationType } from '@/server-app/types/pagination.type';
import { NextApiRequest, NextApiResponse } from 'next';

async function getExamList (): Promise<PaginationType<ExamDataType>> {
  const examList = await (await ExamManagerDao()).exam.findAll({
    limit: 10,
    offset: 0
  });
  const data = examList.map(item => ({
    ...item.dataValues,
    createTime: new Date(item.createTime),
    onlineTime: new Date(item.onlineTime),
    updateTime: new Date(item.updateTime),
    showCourseIntro: Boolean(item.showCourseIntro),
    showLearningFile: Boolean(item.showLearningFile),
    showExamInformation: Boolean(item.showExamInformation)
  }));
  console.log(data);
  return data;
}

export type Res<T> = {
  statusCode: 200,
  json: T
}

async function upsertExamList (data: ExamDataType): Promise<Res<{ message: string }>> {
  await (await (await ExamManagerDao()).exam.upsert({
    id: data.id,
    name: data.name,
    createTime: new Date(),
    onlineTime: new Date(),
    updateTime: new Date(),
    manager: '',
    status: data.status,
    showCourseIntro: data.showCourseIntro,
    showLearningFile: data.showLearningFile,
    showExamInformation: data.showExamInformation
  }));
  return {
    statusCode: 200,
    json: {
      message: 'success'
    }
  };
}

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  switch (req.method) {
    case 'GET':
      res.status(200).json(await getExamList());
      break;
    case 'PUT':
      const result = await upsertExamList(req.body);
      res.status(result.statusCode).json(result.json);
  }
}