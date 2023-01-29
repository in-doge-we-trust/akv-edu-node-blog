import type { z } from 'zod';

import type {
  PostCreateSchema,
  PostSchema,
  PostUpdateSchema,
} from '../schemas';

export type PostModelType = z.infer<typeof PostSchema>;

export type PostCreateDtoType = z.infer<typeof PostCreateSchema>;

export type PostUpdateDtoType = z.infer<typeof PostUpdateSchema>;
