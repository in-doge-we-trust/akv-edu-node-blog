import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
} from 'sequelize';

import type { PostModelType } from '@akv-edu-node-blog/core-lib';

import { idColumn } from '../shared/id-column';
import { Model } from '../shared/model';
import { UserModel } from '../user/model';

type PostModelInterface = Omit<PostModelType, 'createdAt' | 'updatedAt'>;

export class PostModel
  extends Model<InferAttributes<PostModel>, InferCreationAttributes<PostModel>>
  implements PostModelInterface
{
  declare id: PostModelType['id'];
  declare title: PostModelType['title'];
  declare content: PostModelType['content'];
  declare author: PostModelType['author'];

  static META = {
    TABLE_NAME: 'posts',

    ...idColumn.meta,

    COL_TITLE: 'title',
    COL_CONTENT: 'content',
    COL_AUTHOR: 'author',
  };

  static override initializeModel(sequelize: Sequelize): void {
    PostModel.init(
      {
        id: idColumn.config,
        title: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_TITLE,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          field: this.META.COL_CONTENT,
        },
        author: {
          type: DataTypes.UUID,
          allowNull: false,
          field: this.META.COL_AUTHOR,
        },
      },
      { sequelize, tableName: this.META.TABLE_NAME },
    );
  }

  static override associateModel(): void {
    PostModel.belongsTo(UserModel, {
      foreignKey: this.META.COL_AUTHOR,
    });
  }
}
