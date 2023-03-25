import type { UserAuthInfoReadDtoType } from '@aenb/core-lib';

import { UserAuthTokenService } from '../user-auth-token/service';

import type { UserAuthInfoModel } from './model';

export class UserAuthInfoSerializer {
  static async serializeOne(
    modelInstance: UserAuthInfoModel,
  ): Promise<UserAuthInfoReadDtoType> {
    const authTokenId = modelInstance.getDataValue('authToken');

    return {
      id: modelInstance.getDataValue('id'),
      user: modelInstance.getDataValue('user'),
      authToken: authTokenId
        ? await UserAuthTokenService.getOne(authTokenId)
        : null,
      password: modelInstance.getDataValue('password'),
    };
  }

  static async serializeAll(
    modelInstances: UserAuthInfoModel[],
  ): Promise<UserAuthInfoReadDtoType[]> {
    return Promise.all(modelInstances.map(this.serializeOne));
  }
}
