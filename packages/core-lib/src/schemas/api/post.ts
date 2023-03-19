import {
  buildJsonApiCreateRequestObjectSchema,
  buildJsonApiCreateResponseObjectSchema,
  buildJsonApiDeleteResponseObjectSchema,
  buildJsonApiReadResponseObjectSchema,
  buildJsonApiUpdateRequestObjectSchema,
  buildJsonApiUpdateResponseObjectSchema,
} from './base';
import {
  PostCreateSchemaShape,
  PostReadSchemaShape,
  PostUpdateSchemaShape,
} from '../post';

const resourceType = 'posts';

export const PostCreateRequestSchema = buildJsonApiCreateRequestObjectSchema(
  resourceType,
  PostCreateSchemaShape,
);

export const PostCreateResponseSchema = buildJsonApiCreateResponseObjectSchema(
  resourceType,
  PostReadSchemaShape,
);

export const PostsReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  PostReadSchemaShape,
  'many',
);

export const PostReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  PostReadSchemaShape,
  'one',
);

export const PostUpdateRequestSchema = buildJsonApiUpdateRequestObjectSchema(
  resourceType,
  PostUpdateSchemaShape,
);

export const PostUpdateResponseSchema = buildJsonApiUpdateResponseObjectSchema(
  resourceType,
  PostReadSchemaShape,
);

export const PostDeleteResponseSchema =
  buildJsonApiDeleteResponseObjectSchema();
