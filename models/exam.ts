import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface examAttributes {
  id: number;
  name: string;
  createTime: Date;
  onlineTime: Date;
  updateTime: Date;
  manager: string;
  updateComment?: string;
  status: number;
  showCourseIntro?: number;
  showLearningFile?: number;
  showExamInformation: number;
}

export type examPk = "id";
export type examId = exam[examPk];
export type examOptionalAttributes = "id" | "updateComment" | "showCourseIntro" | "showLearningFile";
export type examCreationAttributes = Optional<examAttributes, examOptionalAttributes>;

export class exam extends Model<examAttributes, examCreationAttributes> implements examAttributes {
  id!: number;
  name!: string;
  createTime!: Date;
  onlineTime!: Date;
  updateTime!: Date;
  manager!: string;
  updateComment?: string;
  status!: number;
  showCourseIntro?: number;
  showLearningFile?: number;
  showExamInformation!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof exam {
    return exam.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    onlineTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    manager: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    updateComment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showCourseIntro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showLearningFile: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showExamInformation: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'exam',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
