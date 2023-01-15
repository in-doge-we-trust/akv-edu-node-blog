import type { z } from 'zod';

import type { PostUpdateSchema } from '../../schemas';

export type PostUpdateDtoType = z.infer<typeof PostUpdateSchema>;
