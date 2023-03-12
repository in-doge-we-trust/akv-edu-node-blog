import type { UserReadDtoType } from '@akv-edu-node-blog/core-lib';

import type { UserModel } from './model';

export class UserSerializer {
  static async serializeOne(
    modelInstance: UserModel,
  ): Promise<UserReadDtoType> {
    return {
      id: modelInstance.getDataValue('id'),
      fullName: modelInstance.getDataValue('fullName'),
      email: modelInstance.getDataValue('email'),
    };
  }

  static async serializeAll(
    modelInstances: UserModel[],
  ): Promise<UserReadDtoType[]> {
    return Promise.all(modelInstances.map(this.serializeOne));
  }
}
