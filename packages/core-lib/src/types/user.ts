import type { infer as zodInfer } from 'zod';

import type {
  UserCreateSchema,
  UserReadSchema,
  UserSchema,
  UserUpdatePasswordSchema,
  UserUpdateSchema,
} from '../schemas/user';

export type UserModelType = zodInfer<typeof UserSchema>;

export type UserCreateDtoType = zodInfer<typeof UserCreateSchema>;

export type UserReadDtoType = zodInfer<typeof UserReadSchema>;

export type UserUpdateDtoType = zodInfer<typeof UserUpdateSchema>;

export type UserUpdatePasswordDtoType = zodInfer<
  typeof UserUpdatePasswordSchema
>;
