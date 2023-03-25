import type { UserAuthTokenCreateDtoType } from '@aenb/core-lib';

import { UserAuthTokenModel } from './model';

export class UserAuthTokenService {
  static async create(
    data: UserAuthTokenCreateDtoType,
  ): Promise<UserAuthTokenModel> {
    try {
      return UserAuthTokenModel.create(data);
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not create "${
          UserAuthTokenModel.META.TABLE_NAME
        }" entry! Data: ${JSON.stringify(data, null, 2)}`,
      );
    }
  }

  static async getOne(
    id: UserAuthTokenModel['id'],
  ): Promise<UserAuthTokenModel> {
    try {
      const foundInstance = await UserAuthTokenModel.findByPk(id);

      if (!foundInstance) {
        throw new Error(
          `Could not find "${UserAuthTokenModel.META.TABLE_NAME}" entry with "${UserAuthTokenModel.META.COL_ID}" equal to "${id}"!`,
        );
      }

      return foundInstance;
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${
          UserAuthTokenModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id }, null, 2)}`,
      );
    }
  }

  static async delete(id: UserAuthTokenModel['id']): Promise<void> {
    try {
      const foundInstance = await this.getOne(id);

      return foundInstance.destroy();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not delete "${UserAuthTokenModel.META.TABLE_NAME}" entry with "${UserAuthTokenModel.META.COL_ID}" equal to "${id}"!`,
      );
    }
  }
}
