import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserAuthTokenType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from './shared/id-column';
import { Model } from './shared/model';
import { UserAuthInfoModel } from './user-auth-info';

type UserAuthTokenModelInterface = UserAuthTokenType;

export class UserAuthTokenModel
  extends Model<
    InferAttributes<UserAuthTokenModel>,
    InferCreationAttributes<UserAuthTokenModel>
  >
  implements UserAuthTokenModelInterface
{
  declare id: string;
  declare userAuthInfo: string;
  declare refreshToken: string;
  declare validUntil: string;

  static override initializeModel(sequelize: Sequelize): void {
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
      { sequelize, tableName: 'user_auth_tokens' },
    );
  }

  static override associateModel(): void {
    UserAuthTokenModel.belongsTo(UserAuthInfoModel, {
      foreignKey: 'authInfo',
    });
  }
}
