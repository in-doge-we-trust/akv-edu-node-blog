import type { z } from 'zod';

import type {
  UserPasswordSchema,
  WithUserPasswordSchemaMixin,
  WithUserPasswordWithConfirmationSchemaMixin,
} from '../schemas';

export type UserPasswordType = z.infer<typeof UserPasswordSchema>;

export type WithUserPasswordType<T = unknown> = z.infer<
  typeof WithUserPasswordSchemaMixin
> &
  T;

export type WithUserPasswordWithConfirmationType<T = unknown> = z.infer<
  typeof WithUserPasswordWithConfirmationSchemaMixin
> &
  T;
