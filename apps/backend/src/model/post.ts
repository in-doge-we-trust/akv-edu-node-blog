import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import type { PostModelType } from 'core-lib';

import type { InitDBModelFnType, RemoveTimestamps } from '../sequelize/types';

type PostModelInterface = RemoveTimestamps<PostModelType>;

export class PostModel
  extends Model<InferAttributes<PostModel>, InferCreationAttributes<PostModel>>
  implements PostModelInterface
{
  declare id: string;
  declare title: string;
  declare content: string;
}

export const initPostModel: InitDBModelFnType = (sequelize) => {
  PostModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.TEXT,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    { sequelize, tableName: 'posts' },
  );
};
