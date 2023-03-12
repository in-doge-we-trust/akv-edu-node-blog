import type {
  UserRoleCreateDtoType,
  UserRoleUpdateDtoType,
} from '@akv-edu-node-blog/core-lib';

import { UserRoleModel } from './model';

export class UserRoleService {
  static async create(data: UserRoleCreateDtoType): Promise<UserRoleModel> {
    try {
      return await UserRoleModel.create(data);
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not create new "${
          UserRoleModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify(data, null, 2)}`,
      );
    }
  }

  static async getAll(): Promise<UserRoleModel[]> {
    try {
      return await UserRoleModel.findAll();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${UserRoleModel.META.TABLE_NAME}" entries!`,
      );
    }
  }

  static async getOne(id: UserRoleModel['id']): Promise<UserRoleModel> {
    try {
      const foundModelInstance = await UserRoleModel.findByPk(id);

      if (!foundModelInstance) {
        throw new Error(
          `Could not find "${UserRoleModel.META.TABLE_NAME}" entry with "${UserRoleModel.META.COL_ID}" equal to "${id}"`,
        );
      }

      return foundModelInstance;
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not retrieve "${
          UserRoleModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id }, null, 2)}`,
      );
    }
  }

  static async update(
    id: UserRoleModel['id'],
    data: UserRoleUpdateDtoType,
  ): Promise<UserRoleModel> {
    const foundModelInstance = await this.getOne(id);

    try {
      return foundModelInstance.update({
        role: data.role ?? foundModelInstance.getDataValue('role'),
      });
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not update "${
          UserRoleModel.META.TABLE_NAME
        }" entry! Params: ${JSON.stringify({ id, ...data }, null, 2)}`,
      );
    }
  }

  static async delete(id: UserRoleModel['id']): Promise<void> {
    try {
      const foundModelInstance = await this.getOne(id);

      await foundModelInstance.destroy();
    } catch (e) {
      console.error(e);

      throw new Error(
        `Could not delete "${UserRoleModel.META.TABLE_NAME}" entry with "${UserRoleModel.META.COL_ID}" equal to "${id}"`,
      );
    }
  }
}
