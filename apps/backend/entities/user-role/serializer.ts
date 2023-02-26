import type { UserRoleReadDtoType } from '@akv-edu-node-blog/core-lib';

import type { UserRoleModel } from './model';

export class UserRoleSerializer {
  static serializeOne(modelInstance: UserRoleModel): UserRoleReadDtoType {
    return {
      id: modelInstance.getDataValue('id'),
      role: modelInstance.getDataValue('role'),
    };
  }

  static serializeAll(modelInstances: UserRoleModel[]): UserRoleReadDtoType[] {
    return modelInstances.map(this.serializeOne);
  }
}
