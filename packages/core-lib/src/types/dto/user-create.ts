import type { z } from 'zod';

import type { UserCreateSchema } from '../../schemas';

export type UserCreateDtoType = z.infer<typeof UserCreateSchema>;
