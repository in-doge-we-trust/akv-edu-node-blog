import {
  buildJsonApiCreateRequestObjectSchema,
  buildJsonApiCreateResponseObjectSchema,
  buildJsonApiReadResponseObjectSchema,
  buildJsonApiUpdateRequestObjectSchema,
  buildJsonApiUpdateResponseObjectSchema,
} from './base';
import {
  UserRoleCreateSchema,
  UserRoleReadSchema,
  UserRoleUpdateSchema,
} from '../user-role';

const resourceType = 'user-roles';

export const UserRoleCreateRequestSchema =
  buildJsonApiCreateRequestObjectSchema(resourceType, UserRoleCreateSchema);

export const UserRoleCreateResponseSchema =
  buildJsonApiCreateResponseObjectSchema(resourceType, UserRoleReadSchema);

export const UserRolesReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  UserRoleReadSchema,
  'many',
);

export const UserRoleReadResponseSchema = buildJsonApiReadResponseObjectSchema(
  resourceType,
  UserRoleReadSchema,
  'one',
);

export const UserRoleUpdateRequestSchema =
  buildJsonApiUpdateRequestObjectSchema(resourceType, UserRoleUpdateSchema);

export const UserRoleUpdateResponseSchema =
  buildJsonApiUpdateResponseObjectSchema(resourceType, UserRoleReadSchema);
