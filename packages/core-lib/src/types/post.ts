import type { z } from 'zod';

import type { PostSchema } from '../schemas';

export type PostModelType = z.infer<typeof PostSchema>;
