import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import { UserRolesEnum, UserRoleModelType } from '@aenb/core-lib';

import { idColumn } from '../shared/id-column';
import { Model } from '../shared/model';
import { UserModel } from '../user/model';

import { UserToUserRoleJunction } from '../junctions/user-to-user-role';

type UserRoleModelInterface = UserRoleModelType;

export class UserRoleModel
  extends Model<
    InferAttributes<UserRoleModel>,
    InferCreationAttributes<UserRoleModel>
  >
  implements UserRoleModelInterface
{
  declare id: CreationOptional<UserRoleModelType['id']>;
  declare role: UserRoleModelType['role'];

  static META = {
    TABLE_NAME: 'user_roles',

    ...idColumn.meta,

    COL_ROLE: 'role',
  };

  static override initializeModel(sequelize: Sequelize) {
    UserRoleModel.init(
      {
        id: idColumn.config,
        role: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            isIn: [[UserRolesEnum.Reader, UserRolesEnum.Admin]],
          },
          field: this.META.COL_ROLE,
        },
      },
      { sequelize, tableName: this.META.TABLE_NAME },
    );
  }

  static override associateModel(): void {
    UserRoleModel.belongsToMany(UserModel, {
      through: UserToUserRoleJunction,
      foreignKey: UserToUserRoleJunction.META.COL_USER_ROLE,
    });
  }
}
