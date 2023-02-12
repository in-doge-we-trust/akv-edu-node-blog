import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import { UserRolesEnum, UserRoleType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../config/sequelize';

import { idColumn } from './shared/id-column';
import { UserModel } from './user';

export class UserRoleModel
  extends Model<
    InferAttributes<UserRoleModel>,
    InferCreationAttributes<UserRoleModel>
  >
  implements UserRoleType
{
  declare id: string;
  declare role: UserRolesEnum;
}

UserRoleModel.init(
  {
    id: idColumn,
    role: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isIn: [[UserRolesEnum.Reader, UserRolesEnum.Admin]],
      },
    },
  },
  { sequelize },
);
UserRoleModel.belongsToMany(UserModel, {
  through: 'user_role_to_user',
  foreignKey: 'role',
});
