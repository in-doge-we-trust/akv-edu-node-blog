import type { z } from 'zod';

import type {
  UserCreateSchema,
  UserSchema,
  UserUpdatePasswordSchema,
  UserUpdateSchema,
} from '../schemas/user';

export type UserModelType = z.infer<typeof UserSchema>;

export type UserCreateDtoType = z.infer<typeof UserCreateSchema>;

export type UserUpdateDtoType = z.infer<typeof UserUpdateSchema>;

export type UserUpdatePasswordDtoType = z.infer<
  typeof UserUpdatePasswordSchema
>;
