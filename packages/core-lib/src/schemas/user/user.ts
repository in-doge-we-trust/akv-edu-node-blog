import { z } from 'zod';

import { IdSchema } from '../id';
import { UserRolesSchema } from '../user-role';

export const UserSchemaShape = z.object({
  id: IdSchema,
  role: UserRolesSchema,
  fullName: z.string(),

  email: z.string().email(),
  // TODO: add format validation
  password: z.string().min(8),

  createdAt: z.string().datetime(),
});

export const UserSchema = UserSchemaShape;
