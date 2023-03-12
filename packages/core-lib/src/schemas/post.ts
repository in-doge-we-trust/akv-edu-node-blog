import { object, string } from 'zod';

import { WithEntityMetadataSchemaMixin } from './entity-metadata';
import { IdSchema, WithIdSchemaMixin } from './id';
import { UserReadSchema } from './user';

/**
 * Basic `Post` entity schema.
 *
 * Not intended for direct usage.
 */
export const PostSchemaShape = object({
  title: string(),
  content: string(),
  author: IdSchema,
})
  .merge(WithIdSchemaMixin)
  .merge(WithEntityMetadataSchemaMixin);
export const PostSchema = PostSchemaShape;

export const PostCreateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
  author: true,
});
export const PostCreateSchema = PostCreateSchemaShape;

export const PostReadSchemaShape = PostSchemaShape.pick({
  id: true,
  title: true,
  content: true,
}).extend({
  author: UserReadSchema,
});
export const PostReadSchema = PostReadSchemaShape;

export const PostUpdateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
}).partial();
export const PostUpdateSchema = PostUpdateSchemaShape;
