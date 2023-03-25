import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserAuthTokenType } from '@aenb/core-lib';

import { idColumn } from '../shared/id-column';
import { Model } from '../shared/model';
import { UserAuthInfoModel } from '../user-auth-info/model';

type UserAuthTokenModelInterface = UserAuthTokenType;

export class UserAuthTokenModel
  extends Model<
    InferAttributes<UserAuthTokenModel>,
    InferCreationAttributes<UserAuthTokenModel>
  >
  implements UserAuthTokenModelInterface
{
  declare id: CreationOptional<UserAuthTokenType['id']>;
  declare userAuthInfo: UserAuthTokenType['userAuthInfo'];
  declare refreshToken: UserAuthTokenType['refreshToken'];
  declare validUntil: UserAuthTokenType['validUntil'];

  static META = {
    TABLE_NAME: 'user_auth_tokens',

    ...idColumn.meta,

    COL_USER_AUTH_INFO: 'user_auth_info',
    COL_REFRESH_TOKEN: 'refresh_token',
    COL_VALID_UNTIL: 'valid_until',
  };

  static override initializeModel(sequelize: Sequelize): void {
    UserAuthTokenModel.init(
      {
        id: idColumn.config,
        userAuthInfo: {
          type: DataTypes.UUID,
          field: this.META.COL_USER_AUTH_INFO,
        },
        refreshToken: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_REFRESH_TOKEN,
        },
        validUntil: {
          type: DataTypes.DATE,
          allowNull: false,
          field: this.META.COL_VALID_UNTIL,
        },
      },
      {
        sequelize,
        tableName: this.META.TABLE_NAME,
      },
    );
  }

  static override associateModel(): void {
    UserAuthTokenModel.belongsTo(UserAuthInfoModel, {
      foreignKey: this.META.COL_USER_AUTH_INFO,
    });
  }
}
