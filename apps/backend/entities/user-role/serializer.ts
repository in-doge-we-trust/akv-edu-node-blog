import type { UserRoleReadDtoType } from '@aenb/core-lib';

import type { UserRoleModel } from './model';

export class UserRoleSerializer {
  static async serializeOne(
    modelInstance: UserRoleModel,
  ): Promise<UserRoleReadDtoType> {
    return {
      id: modelInstance.getDataValue('id'),
      role: modelInstance.getDataValue('role'),
    };
  }

  static async serializeAll(
    modelInstances: UserRoleModel[],
  ): Promise<UserRoleReadDtoType[]> {
    return Promise.all(modelInstances.map(this.serializeOne));
  }
}
