import type { z } from 'zod';

import type { AuthTokenSchema } from '../schemas';

export type AuthTokenType = z.infer<typeof AuthTokenSchema>;
