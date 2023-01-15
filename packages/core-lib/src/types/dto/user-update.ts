import type { z } from 'zod';

import type { UserUpdateSchema } from '../../schemas/user';

export type UserUpdateDtoType = z.infer<typeof UserUpdateSchema>;
