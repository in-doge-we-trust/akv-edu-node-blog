import type { z } from 'zod';

import type {
  UserRoleCreateRequestSchema,
  UserRoleCreateResponseSchema,
  UserRoleDeleteResponseSchema,
  UserRoleReadResponseSchema,
  UserRolesReadResponseSchema,
  UserRoleUpdateRequestSchema,
  UserRoleUpdateResponseSchema,
} from '../../schemas';

export type UserRoleCreateRequestType = z.infer<
  typeof UserRoleCreateRequestSchema
>;
export type UserRoleCreateResponseType = z.infer<
  typeof UserRoleCreateResponseSchema
>;

export type UserRolesReadResponseType = z.infer<
  typeof UserRolesReadResponseSchema
>;
export type UserRoleReadResponseType = z.infer<
  typeof UserRoleReadResponseSchema
>;

export type UserRoleUpdateRequestType = z.infer<
  typeof UserRoleUpdateRequestSchema
>;
export type UserRoleUpdateResponseType = z.infer<
  typeof UserRoleUpdateResponseSchema
>;

export type UserRoleDeleteResponseType = z.infer<
  typeof UserRoleDeleteResponseSchema
>;
