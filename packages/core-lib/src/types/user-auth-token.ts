import type { z } from 'zod';

import type { UserAuthTokenSchema } from '../schemas';

export type UserAuthTokenType = z.infer<typeof UserAuthTokenSchema>;
