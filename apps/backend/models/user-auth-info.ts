import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserAuthInfoType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from './shared/id-column';
import { Model } from './shared/model';
import { UserAuthTokenModel } from './user-auth-token';
import { UserModel } from './user';

type UserAuthInfoModelInterface = UserAuthInfoType;

export class UserAuthInfoModel
  extends Model<
    InferAttributes<UserAuthInfoModel>,
    InferCreationAttributes<UserAuthInfoModel>
  >
  implements UserAuthInfoModelInterface
{
  declare id: UserAuthInfoType['id'];
  declare user: UserAuthInfoType['user'];
  declare password: UserAuthInfoType['password'];
  declare authToken: UserAuthInfoType['authToken'];

  static META = {
    TABLE_NAME: 'user_auth_infos',

    ...idColumn.meta,

    COL_USER: 'user',
    COL_PASSWORD: 'password',
    COL_USER_AUTH_TOKEN: 'user_auth_token',
  };

  static override initializeModel(sequelize: Sequelize): void {
    UserAuthInfoModel.init(
      {
        id: idColumn.config,
        user: {
          type: DataTypes.UUID,
          allowNull: false,
          field: this.META.COL_USER,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_PASSWORD,
        },
        authToken: {
          type: DataTypes.UUID,
          field: this.META.COL_USER_AUTH_TOKEN,
        },
      },
      {
        sequelize,
        tableName: this.META.TABLE_NAME,
      },
    );
  }

  static override associateModel(): void {
    UserAuthInfoModel.hasOne(UserAuthTokenModel, {
      foreignKey: UserAuthTokenModel.META.COL_USER_AUTH_INFO,
    });
    UserAuthInfoModel.belongsTo(UserModel, {
      foreignKey: this.META.COL_USER,
    });
  }
}
