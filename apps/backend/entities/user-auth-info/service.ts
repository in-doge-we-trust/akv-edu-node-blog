import type { UserAuthInfoCreateDtoType } from '@akv-edu-node-blog/core-lib';

import { UserAuthInfoModel } from './model';

export class UserAuthInfoService {
  static async create(
    data: UserAuthInfoCreateDtoType,
  ): Promise<UserAuthInfoModel> {
    try {
      return UserAuthInfoModel.create(data);
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not create "${
          UserAuthInfoModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify(data, null, 2)}!`,
      );
    }
  }

  static async getOne(id: UserAuthInfoModel['id']): Promise<UserAuthInfoModel> {
    try {
      const foundInstance = await UserAuthInfoModel.findByPk(id);

      if (!foundInstance) {
        throw new Error(
          `Could not find "${UserAuthInfoModel.META.TABLE_NAME}" entry with "${UserAuthInfoModel.META.COL_ID}" equal to "${id}"!`,
        );
      }

      return foundInstance;
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${
          UserAuthInfoModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id }, null, 2)}`,
      );
    }
  }
}
