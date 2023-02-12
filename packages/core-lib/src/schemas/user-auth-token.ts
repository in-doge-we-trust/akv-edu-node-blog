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
