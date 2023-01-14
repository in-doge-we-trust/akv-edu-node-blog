import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserModelType } from 'core-lib';

import type { InitDBModelFnType, RemoveTimestamps } from '../sequelize/types';

type UserModelInterface = RemoveTimestamps<UserModelType>;

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements UserModelInterface
{
  declare id: CreationOptional<string>;
  declare fullName: string;
  declare email: string;
  declare password: string;
}

export const initUserModel: InitDBModelFnType = (sequelize) => {
  UserModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.TEXT,
      },
    },
    { sequelize, tableName: 'users' },
  );
};
