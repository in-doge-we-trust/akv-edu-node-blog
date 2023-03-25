import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserModelType, UserRoleModelType } from '@aenb/core-lib';

import { Model } from '../shared/model';
import { UserModel } from '../user/model';
import { UserRoleModel } from '../user-role/model';

export class UserToUserRoleJunction extends Model<
  InferAttributes<UserToUserRoleJunction>,
  InferCreationAttributes<UserToUserRoleJunction>
> {
  declare user: UserModelType['id'];
  declare userRole: UserRoleModelType['id'];

  static META = {
    TABLE_NAME: 'user_to_user_roles',

    COL_USER: 'user',
    COL_USER_ROLE: 'user_role',
  };

  static override initializeModel(sequelize: Sequelize): void {
    UserToUserRoleJunction.init(
      {
        user: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: UserModel,
            key: UserModel.META.COL_ID,
          },
          field: this.META.COL_USER,
        },
        userRole: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: UserRoleModel,
            key: UserRoleModel.META.COL_ID,
          },
          field: this.META.COL_USER_ROLE,
        },
      },
      { sequelize, tableName: this.META.TABLE_NAME },
    );
  }
}
