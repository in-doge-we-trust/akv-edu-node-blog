import type { z } from 'zod';

import type { PostCreateSchema } from '../../schemas';

export type PostCreateDtoType = z.infer<typeof PostCreateSchema>;
