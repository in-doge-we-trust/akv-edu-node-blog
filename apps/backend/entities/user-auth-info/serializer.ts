import type { UserAuthInfoReadDtoType } from '@akv-edu-node-blog/core-lib';

import type { UserAuthInfoModel } from './model';

export class UserAuthInfoSerializer {
  static async serializeOne(
    modelInstance: UserAuthInfoModel,
  ): Promise<UserAuthInfoReadDtoType> {
    return {
      id: modelInstance.getDataValue('id'),
      user: modelInstance.getDataValue('user'),
      authToken: 'todo' as any, // TODO
      password: modelInstance.getDataValue('password'),
    };
  }
}
