import type { UserCreateDtoType, UserUpdateDtoType } from '@aenb/core-lib';

import { sequelize } from '../../config/sequelize';
import { UserAuthInfoService } from '../user-auth-info/service';

import { UserModel } from './model';

export class UserService {
  static async create(data: UserCreateDtoType): Promise<UserModel> {
    try {
      return sequelize.transaction(async (transaction) => {
        const { fullName, email, password, passwordConfirm } = data;

        const user = await UserModel.create(
          { fullName, email },
          { transaction },
        );
        await UserAuthInfoService.create(
          {
            password,
            passwordConfirm,
            user: user.id,
          },
          { transaction },
        );

        return user;
      });
    } catch (e) {
      console.error(e);

      throw new Error(`Could not create "${UserModel.META.TABLE_NAME}" entry!`);
    }
  }

  static async getAll(): Promise<UserModel[]> {
    try {
      return UserModel.findAll();
    } catch (e) {
      console.error(e);

      throw new Error(`Could not retrieve "${UserModel.META.TABLE_NAME}"!`);
    }
  }

  static async getOne(id: UserModel['id']): Promise<UserModel> {
    try {
      const foundInstance = await UserModel.findByPk(id);

      if (!foundInstance) {
        throw new Error(
          `Could not find "${UserModel.META.TABLE_NAME}" entry with "${UserModel.META.COL_ID}" equal to "${id}"!`,
        );
      }

      return foundInstance;
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${
          UserModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id }, null, 2)}`,
      );
    }
  }

  static async update(
    id: UserModel['id'],
    data: UserUpdateDtoType,
  ): Promise<UserModel> {
    try {
      const foundInstance = await this.getOne(id);

      return foundInstance.update({
        fullName: data.fullName ?? foundInstance.getDataValue('fullName'),
        email: data.email ?? foundInstance.getDataValue('email'),
      });
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not update "${UserModel.META.TABLE_NAME}" entry with "${
          UserModel.META.COL_ID
        }" equal to "${id}"! Params: ${JSON.stringify(
          { id, ...data },
          null,
          2,
        )}`,
      );
    }
  }

  static async delete(id: UserModel['id']): Promise<void> {
    try {
      const foundInstance = await this.getOne(id);

      await foundInstance.destroy();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not delete "${UserModel.META.TABLE_NAME}" entry with "${UserModel.META.COL_ID}" equal to "${id}"!`,
      );
    }
  }
}
