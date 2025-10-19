import type { Sequelize } from "sequelize";
import { exam as _exam } from "./exam";
import type { examAttributes, examCreationAttributes } from "./exam";

export {
  _exam as exam,
};

export type {
  examAttributes,
  examCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const exam = _exam.initModel(sequelize);


  return {
    exam: exam,
  };
}
