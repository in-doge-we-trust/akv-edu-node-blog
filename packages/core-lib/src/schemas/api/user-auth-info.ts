import {
  UserAuthInfoCreateSchemaShape,
  UserAuthInfoReadSchemaShape,
  UserAuthInfoUpdatePasswordSchemaShape,
  UserAuthInfoUpdateTokenSchema,
} from '../user-auth-info';

import {
  buildJsonApiCreateRequestObjectSchema,
  buildJsonApiCreateResponseObjectSchema,
  buildJsonApiDeleteResponseObjectSchema,
  buildJsonApiReadResponseObjectSchema,
  buildJsonApiUpdateRequestObjectSchema,
} from './base';

const resourceType = 'user-auth-infos';

export const UserAuthInfoCreateRequestSchema =
  buildJsonApiCreateRequestObjectSchema(
    resourceType,
    UserAuthInfoCreateSchemaShape,
  );

export const UserAuthInfoCreateResponseSchema =
  buildJsonApiCreateResponseObjectSchema(
    resourceType,
    UserAuthInfoReadSchemaShape,
  );

export const UserAuthInfosReadResponseSchema =
  buildJsonApiReadResponseObjectSchema(
    resourceType,
    UserAuthInfoReadSchemaShape,
    'many',
  );

export const UserAuthInfoReadResponseSchema =
  buildJsonApiReadResponseObjectSchema(
    resourceType,
    UserAuthInfoReadSchemaShape,
    'one',
  );

export const UserAuthInfoUpdateTokenRequestSchema =
  buildJsonApiUpdateRequestObjectSchema(
    resourceType,
    UserAuthInfoUpdateTokenSchema,
  );

export const UserAuthInfoUpdatePasswordRequestSchema =
  buildJsonApiUpdateRequestObjectSchema(
    resourceType,
    UserAuthInfoUpdatePasswordSchemaShape,
  );

export const UserAuthInfoDeleteResponseSchema =
  buildJsonApiDeleteResponseObjectSchema();
