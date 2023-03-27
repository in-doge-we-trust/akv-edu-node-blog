import type { z } from 'zod';

import type {
  UserAuthInfoCreateRequestSchema,
  UserAuthInfoCreateResponseSchema,
  UserAuthInfosReadResponseSchema,
  UserAuthInfoReadResponseSchema,
  UserAuthInfoUpdateTokenRequestSchema,
  UserAuthInfoUpdatePasswordRequestSchema,
  UserAuthInfoDeleteResponseSchema,
} from '../../schemas';

export type UserAuthInfoCreateRequestType = z.infer<
  typeof UserAuthInfoCreateRequestSchema
>;
export type UserAuthInfoCreateResponseType = z.infer<
  typeof UserAuthInfoCreateResponseSchema
>;

export type UserAuthInfosReadResponseType = z.infer<
  typeof UserAuthInfosReadResponseSchema
>;
export type UserAuthInfoReadResponseType = z.infer<
  typeof UserAuthInfoReadResponseSchema
>;

export type UserAuthInfoUpdateTokenRequestSchema = z.infer<
  typeof UserAuthInfoUpdateTokenRequestSchema
>;

export type UserAuthInfoUpdatePasswordRequestSchema = z.infer<
  typeof UserAuthInfoUpdatePasswordRequestSchema
>;

export type UserAuthInfoDeleteResponseSchema = z.infer<
  typeof UserAuthInfoDeleteResponseSchema
>;
