import { z } from 'zod';

import { IdSchema } from './id';

export const PostSchemaShape = z.object({
  id: IdSchema,
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  author: IdSchema,
});
export const PostSchema = PostSchemaShape;

export const PostCreateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
});
export const PostCreateSchema = PostCreateSchemaShape;

export const PostUpdateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
});
export const PostUpdateSchema = PostUpdateSchemaShape;
