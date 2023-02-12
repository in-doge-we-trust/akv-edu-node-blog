import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserAuthInfoType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../config/sequelize';

import { idColumn } from './shared/id-column';
import { UserAuthTokenModel } from './user-auth-token';
import { UserModel } from './user';

export class UserAuthInfoModel
  extends Model<
    InferAttributes<UserAuthInfoModel>,
    InferCreationAttributes<UserAuthInfoModel>
  >
  implements UserAuthInfoType
{
  declare id: string;
  declare user: string;
  declare password: string;
  declare authToken: string;
}

UserAuthInfoModel.init(
  {
    id: idColumn,
    user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authToken: {
      type: DataTypes.UUID,
    },
  },
  { sequelize },
);
UserAuthInfoModel.hasOne(UserAuthTokenModel, { foreignKey: 'userAuthInfo' });
UserAuthInfoModel.belongsTo(UserModel, { foreignKey: 'authInfo' });
