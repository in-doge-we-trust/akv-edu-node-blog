import { z } from 'zod';

import { WithEntityMetadataSchemaMixin } from './entity-metadata';
import { IdSchema, WithIdSchemaMixin } from './id';

/**
 * Basic `Post` entity schema.
 *
 * Not intended for direct usage.
 */
export const PostSchemaShape = z
  .object({
    title: z.string(),
    content: z.string(),
    author: IdSchema,
  })
  .merge(WithIdSchemaMixin)
  .merge(WithEntityMetadataSchemaMixin);
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
