import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserModelType } from '@akv-edu-node-blog/core-lib/types';
import { UserRoles } from '@akv-edu-node-blog/core-lib/enums';

import type { InitDBModelFnType, RemoveTimestamps } from '../sequelize/types';

import { AuthTokenModel } from './auth-token';

type IUserModel = RemoveTimestamps<UserModelType>;

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements IUserModel
{
  declare id: CreationOptional<string>;
  declare role: UserRoles;
  declare fullName: string;
  declare email: string;
  declare password: string;
}

export const initUserModel: InitDBModelFnType = (sequelize) => {
  UserModel.init(
    {
      id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      role: {
        type: DataTypes.TEXT,
        defaultValue: UserRoles.Reader,
        allowNull: false,
        validate: {
          isValidRoles(value: UserRoles) {
            const validRoles = [UserRoles.Admin, UserRoles.Reader];

            if (!validRoles.includes(value)) {
              throw new Error(`"role" is not in [${validRoles.join(', ')}]`);
            }
          },
        },
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

  UserModel.hasOne(AuthTokenModel);
  AuthTokenModel.belongsTo(UserModel);
};
