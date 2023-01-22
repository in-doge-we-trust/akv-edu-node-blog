import type { z } from 'zod';

import type { UserCreateAdminSchema } from '../../schemas';

export type UserCreateAdminDtoType = z.infer<typeof UserCreateAdminSchema>;
