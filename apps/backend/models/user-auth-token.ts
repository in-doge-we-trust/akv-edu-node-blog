import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserAuthTokenType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../config/sequelize';

import { idColumn } from './shared/id-column';
import { UserAuthInfoModel } from './user-auth-info';

export class UserAuthTokenModel
  extends Model<
    InferAttributes<UserAuthTokenModel>,
    InferCreationAttributes<UserAuthTokenModel>
  >
  implements UserAuthTokenType
{
  declare id: string;
  declare userAuthInfo: string;
  declare refreshToken: string;
  declare validUntil: string;
}

UserAuthTokenModel.init(
  {
    id: idColumn,
    userAuthInfo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    validUntil: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize },
);
UserAuthTokenModel.belongsTo(UserAuthInfoModel, { foreignKey: 'authToken' });
