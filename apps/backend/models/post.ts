import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { PostModelType } from '@akv-edu-node-blog/core-lib';

import { sequelize } from '../config/sequelize';

import { idColumn } from './shared/id-column';
import { UserModel } from './user';

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
    id: idColumn,
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
