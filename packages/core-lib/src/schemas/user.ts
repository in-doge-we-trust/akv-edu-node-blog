import { z } from 'zod';

import { IdSchema } from './id';
import { UserRoleSchema } from './user-role';
import {
  PasswordWithConfirmationSchemaMixin,
  refinePasswordConfirmMatch,
} from './password';

export const UserSchemaShape = z.object({
  id: IdSchema,
  role: UserRoleSchema,
  fullName: z.string(),
  email: z.string().email(),
  // TODO: Add format validation
  password: z.string(),
});
export const UserSchema = UserSchemaShape;

export const UserCreateSchemaShape = UserSchema.pick({
  fullName: true,
  email: true,
}).merge(PasswordWithConfirmationSchemaMixin);
export const UserCreateSchema = UserCreateSchemaShape.superRefine(
  refinePasswordConfirmMatch,
);

export const UserUpdateSchemaShape = UserSchema.pick({
  fullName: true,
  email: true,
});
export const UserUpdateSchema = UserUpdateSchemaShape;

export const UserUpdatePasswordSchemaShape =
  PasswordWithConfirmationSchemaMixin;
export const UserUpdatePasswordSchema =
  UserUpdatePasswordSchemaShape.superRefine(refinePasswordConfirmMatch);
