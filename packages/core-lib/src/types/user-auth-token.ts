import type { z } from 'zod';

import type {
  UserAuthTokenCreateSchema,
  UserAuthTokenReadSchema,
  UserAuthTokenSchema,
} from '../schemas';

export type UserAuthTokenType = z.infer<typeof UserAuthTokenSchema>;

export type UserAuthTokenCreateDtoType = z.infer<
  typeof UserAuthTokenCreateSchema
>;

export type UserAuthTokenReadDtoType = z.infer<typeof UserAuthTokenReadSchema>;
