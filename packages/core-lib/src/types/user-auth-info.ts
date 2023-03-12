import type { infer as zodInfer } from 'zod';

import type {
  UserAuthInfoCreateSchema,
  UserAuthInfoReadSchema,
  UserAuthInfoSchema,
  UserAuthInfoUpdatePasswordSchema,
  UserAuthInfoUpdateSchema,
  UserAuthInfoUpdateTokenSchema,
} from '../schemas';

export type UserAuthInfoType = zodInfer<typeof UserAuthInfoSchema>;

export type UserAuthInfoCreateDtoType = zodInfer<
  typeof UserAuthInfoCreateSchema
>;

export type UserAuthInfoReadDtoType = zodInfer<typeof UserAuthInfoReadSchema>;

export type UserAuthInfoUpdateTokenDtoType = zodInfer<
  typeof UserAuthInfoUpdateTokenSchema
>;

export type UserAuthInfoUpdatePasswordDtoType = zodInfer<
  typeof UserAuthInfoUpdatePasswordSchema
>;

export type UserAuthInfoUpdateDtoType = zodInfer<
  typeof UserAuthInfoUpdateSchema
>;
