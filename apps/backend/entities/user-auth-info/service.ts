import bcrypt from 'bcrypt';
import type { Attributes, CreateOptions } from 'sequelize';

import type { UserAuthInfoCreateDtoType } from '@aenb/core-lib';

import { UserAuthInfoModel } from './model';

export class UserAuthInfoService {
  static async create(
    data: UserAuthInfoCreateDtoType,
    options?: CreateOptions<Attributes<UserAuthInfoModel>>,
  ): Promise<UserAuthInfoModel> {
    try {
      const { password, passwordConfirm, user } = data;

      if (password !== passwordConfirm) {
        throw new Error('Passwords do not match!');
      }

      const hashedPassword = await bcrypt.hash(password, 13);

      return UserAuthInfoModel.create(
        { user, password: hashedPassword },
        options,
      );
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not create "${UserAuthInfoModel.META.TABLE_NAME}" entry!`,
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

  static async delete(id: UserAuthInfoModel['id']): Promise<void> {
    try {
      const foundInstance = await this.getOne(id);

      foundInstance.destroy();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not delete "${UserAuthInfoModel.META.TABLE_NAME}" with "id" equal to "${id}"!`,
      );
    }
  }
}
