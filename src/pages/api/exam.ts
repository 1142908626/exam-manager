import { ExamDataType, ExamStatusEnum } from '@/server-app/dto/exam.dto';
import { PaginationType } from '@/server-app/types/pagination.type';
import { fakerZH_CN } from '@faker-js/faker';
import { NextApiRequest, NextApiResponse } from 'next';

async function getExamList (): Promise<PaginationType<ExamDataType>> {
  return {
    size: 10,
    page: 1,
    count: 100,
    data: [
      {
        id: 1,
        name: fakerZH_CN.word.words(),
        createTime: fakerZH_CN.date.anytime(),
        onlineTime: fakerZH_CN.date.anytime(),
        updateTime: fakerZH_CN.date.anytime(),
        updateComment: fakerZH_CN.word.words(),
        status: fakerZH_CN.helpers.enumValue(ExamStatusEnum),
        showCourseIntro: fakerZH_CN.datatype.boolean(),
        showLearningFile: fakerZH_CN.datatype.boolean(),
        showExamInformation: fakerZH_CN.datatype.boolean(),
        manager: fakerZH_CN.person.fullName()
      },
      {
        id: 2,
        name: fakerZH_CN.word.words(),
        createTime: fakerZH_CN.date.anytime(),
        onlineTime: fakerZH_CN.date.anytime(),
        updateTime: fakerZH_CN.date.anytime(),
        updateComment: fakerZH_CN.word.words(),
        status: fakerZH_CN.helpers.enumValue(ExamStatusEnum),
        showCourseIntro: fakerZH_CN.datatype.boolean(),
        showLearningFile: fakerZH_CN.datatype.boolean(),
        showExamInformation: fakerZH_CN.datatype.boolean(),
        manager: fakerZH_CN.person.fullName()
      }
    ]
  };
}

export type Res<T> = {
  statusCode: 200,
  json: T
}

async function upsertExamList (data: ExamDataType): Promise<Res<{ message: string }>> {
  console.log(data);
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