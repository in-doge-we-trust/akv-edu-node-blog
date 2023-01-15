import type { z } from 'zod';

import type { PostSchema } from '../../schemas/post';

export type PostModelType = z.infer<typeof PostSchema>;
