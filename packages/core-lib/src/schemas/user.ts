import { z } from 'zod';

import { IdSchema, WithIdSchemaMixin } from './id';
import {
  refineUserPasswordAndConfirmationMatch,
  WithUserPasswordWithConfirmationSchemaMixin,
} from './user-password';

/**
 * Basic `User` entity schema.
 *
 * Not intended for direct usage.
 */
export const UserSchemaShape = z
  .object({
    fullName: z.string(),
    email: z.string().email(),
    posts: z.array(IdSchema),

    role: IdSchema,
    authInfo: IdSchema,
  })
  .merge(WithIdSchemaMixin);
export const UserSchema = UserSchemaShape;

export const UserCreateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
}).merge(WithUserPasswordWithConfirmationSchemaMixin);
export const UserCreateSchema = UserCreateSchemaShape.superRefine(
  refineUserPasswordAndConfirmationMatch,
);

export const UserUpdateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
});
export const UserUpdateSchema = UserUpdateSchemaShape;

export const UserUpdatePasswordSchemaShape =
  WithUserPasswordWithConfirmationSchemaMixin;
export const UserUpdatePasswordSchema =
  UserUpdatePasswordSchemaShape.superRefine(
    refineUserPasswordAndConfirmationMatch,
  );
