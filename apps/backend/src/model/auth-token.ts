import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { AuthTokenModelType } from '@akv-edu-node-blog/core-lib/types';

import type { InitDBModelFnType } from '../sequelize/types';

type IAuthTokenModel = Omit<AuthTokenModelType, 'userId'>;

export class AuthTokenModel
  extends Model<
    InferAttributes<AuthTokenModel>,
    InferCreationAttributes<AuthTokenModel>
  >
  implements IAuthTokenModel
{
  declare id: string;
  declare content: string;
  declare validUntil: string;
}

export const initAuthTokenModel: InitDBModelFnType = (sequelize) => {
  AuthTokenModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      validUntil: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'auth_tokens',
    },
  );
};
