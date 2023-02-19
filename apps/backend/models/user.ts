import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { UserModelType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from './shared/id-column';
import { Model } from './shared/model';
import { PostModel } from './post';
import { UserAuthInfoModel } from './user-auth-info';
import { UserRoleModel } from './user-role';

type UserModelInterface = UserModelType;

export class UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>
  implements UserModelInterface
{
  declare id: UserModelType['id'];
  declare roles: UserModelType['roles'];
  declare fullName: UserModelType['fullName'];
  declare email: UserModelType['email'];

  static override initializeModel(sequelize: Sequelize): void {
    UserModel.init(
      {
        id: idColumn,
        roles: {
          type: DataTypes.ARRAY(DataTypes.UUID),
          allowNull: false,
        },
        fullName: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      { sequelize, tableName: 'users' },
    );
  }

  static override associateModel(): void {
    UserModel.hasOne(UserAuthInfoModel, { foreignKey: 'user' });
    UserModel.belongsToMany(UserRoleModel, {
      through: 'user_to_user_role',
      foreignKey: 'user',
    });
    UserModel.hasMany(PostModel, { foreignKey: 'author' });
  }
}
