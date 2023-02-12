import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { UserModelType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../config/sequelize';

import { idColumn } from './shared/id-column';
import { PostModel } from './post';
import { UserAuthInfoModel } from './user-auth-info';
import { UserRoleModel } from './user-role';

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
    id: idColumn,
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
UserModel.hasOne(UserAuthInfoModel, { foreignKey: 'user' });
UserModel.belongsToMany(UserRoleModel, {
  through: 'user_to_user_role',
  foreignKey: 'user',
});
UserModel.hasMany(PostModel, { foreignKey: 'posts' });
