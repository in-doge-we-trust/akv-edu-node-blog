import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import { UserRolesEnum, UserRoleType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from './shared/id-column';
import { Model } from './shared/model';
import { UserModel } from './user';

type UserRoleModelInterface = UserRoleType;

export class UserRoleModel
  extends Model<
    InferAttributes<UserRoleModel>,
    InferCreationAttributes<UserRoleModel>
  >
  implements UserRoleModelInterface
{
  declare id: string;
  declare role: UserRolesEnum;

  static override initializeModel(sequelize: Sequelize) {
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
      { sequelize, tableName: 'user_roles' },
    );
  }

  static override associateModel(): void {
    UserRoleModel.belongsToMany(UserModel, {
      through: 'user_to_user_role',
      foreignKey: 'role',
    });
  }
}
