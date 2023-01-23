import { z } from 'zod';

import { IdSchema } from './id';
import { UserRoleSchema } from './user-role';
import { AuthTokenSchema } from './auth-token';
import {
  PasswordWithConfirmationSchemaMixin,
  refinePasswordConfirmMatch,
} from './password';

export const UserSchemaShape = z.object({
  id: IdSchema,
  role: UserRoleSchema,
  fullName: z.string(),
  email: z.string().email(),
  posts: z.array(IdSchema),

  // TODO: Add format validation
  password: z.string(),
  authToken: AuthTokenSchema,
});
export const UserSchema = UserSchemaShape;

export const UserCreateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
}).merge(PasswordWithConfirmationSchemaMixin);
export const UserCreateSchema = UserCreateSchemaShape.superRefine(
  refinePasswordConfirmMatch,
);

export const UserUpdateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
});
export const UserUpdateSchema = UserUpdateSchemaShape;

export const UserUpdatePasswordSchemaShape =
  PasswordWithConfirmationSchemaMixin;
export const UserUpdatePasswordSchema =
  UserUpdatePasswordSchemaShape.superRefine(refinePasswordConfirmMatch);
