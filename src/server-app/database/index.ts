const { Sequelize } = require('sequelize');
import { initModels } from '../../../models/init-models';


export const examManagerDb = new Sequelize({
  port: 3306,
  database: 'exam-manager',
  username: 'user',
  password: 'root',
  dialect: 'mysql'
});

export const ExamManagerDao = async () => {
  await examManagerDb.authenticate();
  console.log('connection success');
  return initModels(examManagerDb);
};

