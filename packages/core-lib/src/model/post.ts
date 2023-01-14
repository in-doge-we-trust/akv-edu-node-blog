import { z } from 'zod';

import { IdSchema } from './shared/id';

export const PostSchema = z.object({
  id: IdSchema,
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type PostModelType = z.infer<typeof PostSchema>;

export const PostCreateSchema = PostSchema.pick({
  title: true,
  content: true,
});
export type PostModelCreateType = z.infer<typeof PostCreateSchema>;

export const PostUpdateSchema = PostSchema.pick({
  title: true,
  content: true,
}).partial();
export type PostModelUpdateType = z.infer<typeof PostUpdateSchema>;
