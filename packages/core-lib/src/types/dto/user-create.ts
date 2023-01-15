import type { z } from 'zod';

import type { UserCreateSchema } from '../../schemas/user';

export type UserCreateDtoType = z.infer<typeof UserCreateSchema>;
