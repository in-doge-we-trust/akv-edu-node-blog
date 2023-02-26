import { nativeEnum, object } from 'zod';

import { UserRolesEnum } from '../enums/user-roles';
import { WithIdSchemaMixin } from './id';

const UserRolesEnumSchema = nativeEnum(UserRolesEnum);

export const UserRoleModelSchema = object({
  role: UserRolesEnumSchema,
}).merge(WithIdSchemaMixin);

export const UserRoleCreateSchema = UserRoleModelSchema.pick({
  role: true,
});

export const UserRoleReadSchema = UserRoleModelSchema;

export const UserRoleUpdateSchema = UserRoleModelSchema.pick({
  role: true,
}).partial();
