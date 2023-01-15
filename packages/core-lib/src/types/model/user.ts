import type { z } from 'zod';

import type { UserSchema } from '../../schemas/user';

export type UserModelType = z.infer<typeof UserSchema>;
