import { object } from 'zod';

import { IdSchema, WithIdSchemaMixin } from './id';
import { UserAuthTokenReadSchema } from './user-auth-token';
import {
  refineOldUserPasswordNotMatchUserPasswordAndConfirmationMatch,
  refineUserPasswordAndConfirmationMatch,
  WithUserPasswordSchemaMixin,
  WithUserPasswordWithConfirmationSchemaMixin,
  WithUserPasswordWithOldWithConfirmationSchemaMixin,
} from './user-password';

export const UserAuthInfoSchemaShape = object({
  user: IdSchema,
  authToken: IdSchema.nullable(),
})
  .merge(WithIdSchemaMixin)
  .merge(WithUserPasswordSchemaMixin);
export const UserAuthInfoSchema = UserAuthInfoSchemaShape;

export const UserAuthInfoCreateSchemaShape = UserAuthInfoSchemaShape.pick({
  user: true,
}).merge(WithUserPasswordWithConfirmationSchemaMixin);
export const UserAuthInfoCreateSchema =
  UserAuthInfoCreateSchemaShape.superRefine(
    refineUserPasswordAndConfirmationMatch,
  );

export const UserAuthInfoReadSchemaShape = UserAuthInfoSchemaShape.pick({
  id: true,
  user: true,
  password: true,
}).extend({
  authToken: UserAuthTokenReadSchema.nullable(),
});
export const UserAuthInfoReadSchema = UserAuthInfoReadSchemaShape;

export const UserAuthInfoUpdateTokenSchema = UserAuthInfoSchemaShape.pick({
  authToken: true,
});
export const UserAuthInfoUpdatePasswordSchemaShape =
  WithUserPasswordWithOldWithConfirmationSchemaMixin;
export const UserAuthInfoUpdatePasswordSchema =
  UserAuthInfoUpdatePasswordSchemaShape.superRefine(
    refineOldUserPasswordNotMatchUserPasswordAndConfirmationMatch,
  );
export const UserAuthInfoUpdateSchema = UserAuthInfoUpdateTokenSchema.or(
  UserAuthInfoUpdatePasswordSchema,
);
