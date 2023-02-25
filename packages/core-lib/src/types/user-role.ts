import type { z } from 'zod';

import type { UserRoleModelSchema } from '../schemas';

export type UserRoleModelType = z.infer<typeof UserRoleModelSchema>;
