import type { z } from 'zod';

import type { UserUpdateSchema } from '../../schemas';

export type UserUpdateDtoType = z.infer<typeof UserUpdateSchema>;
