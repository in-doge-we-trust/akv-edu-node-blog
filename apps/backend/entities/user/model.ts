import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserModelType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from '../shared/id-column';
import { Model } from '../shared/model';
import { PostModel } from '../post/model';
import { UserAuthInfoModel } from '../user-auth-info/model';
import { UserRoleModel } from '../user-role/model';
import { UserToUserRoleJunction } from '../junctions/user-to-user-role';

type UserModelInterface = UserModelType;

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements UserModelInterface
{
  declare id: UserModelType['id'];
  declare fullName: UserModelType['fullName'];
  declare email: UserModelType['email'];

  static META = {
    TABLE_NAME: 'users',

    ...idColumn.meta,

    COL_FULL_NAME: 'full_name',
    COL_EMAIL: 'email',
  };

  static override initializeModel(sequelize: Sequelize): void {
    UserModel.init(
      {
        id: idColumn.config,
        fullName: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_FULL_NAME,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_EMAIL,
        },
      },
      { sequelize, tableName: this.META.TABLE_NAME },
    );
  }

  static override associateModel(): void {
    UserModel.hasOne(UserAuthInfoModel, {
      foreignKey: UserAuthInfoModel.META.COL_USER,
    });
    UserModel.belongsToMany(UserRoleModel, {
      through: UserToUserRoleJunction,
      foreignKey: UserToUserRoleJunction.META.COL_USER,
    });
    UserModel.hasMany(PostModel, { foreignKey: PostModel.META.COL_AUTHOR });
  }
}
