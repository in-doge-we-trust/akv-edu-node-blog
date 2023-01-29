import type { z } from 'zod';

import type {
  PasswordSchema,
  PasswordSchemaMixin,
  PasswordWithConfirmationSchemaMixin,
} from '../schemas';

export type PasswordType = z.infer<typeof PasswordSchema>;

export type WithPasswordType = z.infer<typeof PasswordSchemaMixin>;

export type WithPasswordWithConfirmationType = z.infer<
  typeof PasswordWithConfirmationSchemaMixin
>;
