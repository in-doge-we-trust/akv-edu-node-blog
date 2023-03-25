import type { PostCreateDtoType, PostUpdateDtoType } from '@aenb/core-lib';

import { PostModel } from './model';

export class PostService {
  static async create(data: PostCreateDtoType): Promise<PostModel> {
    try {
      return PostModel.create(data);
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not create "${
          PostModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify(data, null, 2)}`,
      );
    }
  }

  static async getAll(): Promise<PostModel[]> {
    try {
      return PostModel.findAll();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve ${PostModel.META.TABLE_NAME} entries!`,
      );
    }
  }

  static async getOne(id: PostModel['id']): Promise<PostModel> {
    try {
      const foundInstance = await PostModel.findByPk(id);

      if (!foundInstance) {
        throw new Error(
          `Could not retrieve "${PostModel.META.TABLE_NAME}" entry with "${PostModel.META.COL_ID}" equal to "${id}"!`,
        );
      }

      return foundInstance;
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${
          PostModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id }, null, 2)}`,
      );
    }
  }

  static async update(
    id: PostModel['id'],
    data: PostUpdateDtoType,
  ): Promise<PostModel> {
    try {
      const foundInstance = await this.getOne(id);

      return foundInstance.update({
        title: data.title ?? foundInstance.getDataValue('title'),
        content: data.title ?? foundInstance.getDataValue('title'),
      });
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not update "${
          PostModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id, ...data }, null, 2)}`,
      );
    }
  }

  static async delete(id: PostModel['id']): Promise<void> {
    try {
      const foundInstance = await this.getOne(id);

      foundInstance.destroy();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not delete "${PostModel.META.TABLE_NAME}" entry with "${PostModel.META.COL_ID}" equal to "${id}"!`,
      );
    }
  }
}
