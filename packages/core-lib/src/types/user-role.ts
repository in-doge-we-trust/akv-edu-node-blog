import type { z } from 'zod';

import type { UserRoleSchema } from '../schemas';

export type UserRoleType = z.infer<typeof UserRoleSchema>;
