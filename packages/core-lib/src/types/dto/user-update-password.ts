import type { z } from 'zod';

import type { UserUpdatePasswordSchema } from '../../schemas';

export type UserUpdatePasswordDtoType = z.infer<
  typeof UserUpdatePasswordSchema
>;
