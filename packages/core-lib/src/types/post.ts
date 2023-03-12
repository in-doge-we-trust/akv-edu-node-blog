import type { infer as zodInfer } from 'zod';

import type {
  PostCreateSchema,
  PostReadSchema,
  PostSchema,
  PostUpdateSchema,
} from '../schemas';

export type PostModelType = zodInfer<typeof PostSchema>;

export type PostCreateDtoType = zodInfer<typeof PostCreateSchema>;

export type PostReadDtoType = zodInfer<typeof PostReadSchema>;

export type PostUpdateDtoType = zodInfer<typeof PostUpdateSchema>;
