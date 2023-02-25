import { z } from 'zod';

import { IdSchema, WithIdSchemaMixin } from './id';
import { WithUserPasswordSchemaMixin } from './user-password';

export const UserAuthInfoSchemaShape = z
  .object({
    user: IdSchema,
    authToken: IdSchema,
  })
  .merge(WithIdSchemaMixin)
  .merge(WithUserPasswordSchemaMixin);

export const UserAuthInfoSchema = UserAuthInfoSchemaShape;
