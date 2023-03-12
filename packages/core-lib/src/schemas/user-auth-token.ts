import { z } from 'zod';

import { IdSchema, WithIdSchemaMixin } from './id';

export const UserAuthTokenSchemaShape = z
  .object({
    userAuthInfo: IdSchema,
    refreshToken: z.string(),
    validUntil: z.string().datetime(),
  })
  .merge(WithIdSchemaMixin);
export const UserAuthTokenSchema = UserAuthTokenSchemaShape;

export const UserAuthTokenCreateSchemaShape = UserAuthTokenSchemaShape.pick({
  userAuthInfo: true,
  refreshToken: true,
  validUntil: true,
});
export const UserAuthTokenCreateSchema = UserAuthTokenCreateSchemaShape;

export const UserAuthTokenReadSchemaShape = UserAuthTokenSchemaShape.pick({
  id: true,
  refreshToken: true,
  validUntil: true,
});
export const UserAuthTokenReadSchema = UserAuthTokenReadSchemaShape;
