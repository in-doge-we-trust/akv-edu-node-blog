import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { PostModelType } from '@akv-edu-node-blog/core-lib';

import { UserModel } from './user';
import { sequelize } from './index';

type PostModelInterface = Omit<PostModelType, 'createdAt' | 'updatedAt'>;

export class PostModel
  extends Model<InferAttributes<PostModel>, InferCreationAttributes<PostModel>>
  implements PostModelInterface
{
  declare id: PostModelType['id'];
  declare title: PostModelType['title'];
  declare content: PostModelType['content'];
  declare author: PostModelType['author'];
}

PostModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'posts' },
);

PostModel.belongsTo(UserModel, { foreignKey: 'author' });
