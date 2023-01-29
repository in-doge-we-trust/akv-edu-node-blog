import type { z } from 'zod';

import type { UserAuthInfoSchema } from '../schemas';

export type UserAuthInfoType = z.infer<typeof UserAuthInfoSchema>;
