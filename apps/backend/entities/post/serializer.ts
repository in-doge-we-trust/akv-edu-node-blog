import type { PostReadDtoType } from '@akv-edu-node-blog/core-lib';

import { UserSerializer } from '../user/serializer';
import { UserService } from '../user/service';

import { PostModel } from './model';

export class PostSerializer {
  static async serializeOne(
    modelInstance: PostModel,
  ): Promise<PostReadDtoType> {
    try {
      const author = await UserService.getOne(modelInstance.getDataValue('id'));

      return {
        id: modelInstance.getDataValue('id'),
        title: modelInstance.getDataValue('title'),
        content: modelInstance.getDataValue('content'),
        author: await UserSerializer.serializeOne(author),
      };
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not serialize "${PostModel.META.TABLE_NAME}" entry! Error: ${
          (e as Error).message
        }`,
      );
    }
  }

  static async serializeAll(
    modelInstances: PostModel[],
  ): Promise<PostReadDtoType[]> {
    try {
      return await Promise.all(modelInstances.map(this.serializeOne));
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not serialize "${PostModel.META.TABLE_NAME}" entries! Error: ${
          (e as Error).message
        }`,
      );
    }
  }
}
