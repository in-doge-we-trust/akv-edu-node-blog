import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserModelType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../../config/sequelize';

import { PostModel } from './post';

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements UserModelType
{
  declare id: UserModelType['id'];
  declare role: UserModelType['role'];
  declare fullName: UserModelType['fullName'];
  declare email: UserModelType['email'];
  declare posts: UserModelType['posts'];
  declare authInfo: UserModelType['authInfo'];
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    posts: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
      defaultValue: [],
    },
    authInfo: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'users' },
);

UserModel.hasMany(PostModel, { foreignKey: 'posts' });
