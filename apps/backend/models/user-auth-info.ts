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
  declare id: string;
  declare user: string;
  declare password: string;
  declare authToken: string;

  static override initializeModel(sequelize: Sequelize): void {
    UserAuthInfoModel.init(
      {
        id: idColumn,
        user: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        authToken: {
          type: DataTypes.UUID,
        },
      },
      { sequelize, tableName: 'user_auth_infos' },
    );
  }

  static override associateModel(): void {
    UserAuthInfoModel.hasOne(UserAuthTokenModel, {
      foreignKey: 'authToken',
    });
    UserAuthInfoModel.belongsTo(UserModel, { foreignKey: 'user' });
  }
}
