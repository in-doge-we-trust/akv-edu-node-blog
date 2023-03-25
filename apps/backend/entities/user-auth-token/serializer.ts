import type { UserAuthTokenReadDtoType } from '@aenb/core-lib';

import type { UserAuthTokenModel } from './model';

export class UserAuthTokenSerializer {
  static async serializeOne(
    modelInstance: UserAuthTokenModel,
  ): Promise<UserAuthTokenReadDtoType> {
    return {
      id: modelInstance.getDataValue('id'),
      refreshToken: modelInstance.getDataValue('refreshToken'),
      validUntil: modelInstance.getDataValue('validUntil'),
    };
  }

  static async serializeAll(
    modelInstances: UserAuthTokenModel[],
  ): Promise<UserAuthTokenReadDtoType[]> {
    return Promise.all(modelInstances.map(this.serializeOne));
  }
}
