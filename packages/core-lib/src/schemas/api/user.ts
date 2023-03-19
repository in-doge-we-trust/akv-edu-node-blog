import {
  UserCreateSchemaShape,
  UserReadSchemaShape,
  UserUpdateSchemaShape,
} from '../user';

import {
  buildJsonApiCreateRequestObjectSchema,
  buildJsonApiCreateResponseObjectSchema,
  buildJsonApiDeleteResponseObjectSchema,
  buildJsonApiReadResponseObjectSchema,
  buildJsonApiUpdateRequestObjectSchema,
  buildJsonApiUpdateResponseObjectSchema,
} from './base';

const resourceType = 'users';

export const UserCreateRequestSchema = buildJsonApiCreateRequestObjectSchema(
  resourceType,
  UserCreateSchemaShape,
);

export const UserCreateResponseSchema = buildJsonApiCreateResponseObjectSchema(
  resourceType,
  UserReadSchemaShape,
);

export const UsersReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  UserReadSchemaShape,
  'many',
);

export const UserReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  UserReadSchemaShape,
  'one',
);

export const UserUpdateRequestSchema = buildJsonApiUpdateRequestObjectSchema(
  resourceType,
  UserUpdateSchemaShape,
);

export const UserUpdateResponseSchema = buildJsonApiUpdateResponseObjectSchema(
  resourceType,
  UserReadSchemaShape,
);

export const UserDeleteResponseSchema =
  buildJsonApiDeleteResponseObjectSchema();
