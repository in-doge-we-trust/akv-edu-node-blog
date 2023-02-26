import type { UserReadDtoType } from '@akv-edu-node-blog/core-lib';

import type { UserModel } from './model';

export class UserSerializer {
  static serializeOne(modelInstance: UserModel): UserReadDtoType {
    return {
      id: modelInstance.getDataValue('id'),
      fullName: modelInstance.getDataValue('fullName'),
      email: modelInstance.getDataValue('email'),
    };
  }

  static serializeAll(modelInstances: UserModel[]): UserReadDtoType[] {
    return modelInstances.map(this.serializeOne);
  }
}
