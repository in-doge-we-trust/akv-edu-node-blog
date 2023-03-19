import type { z } from 'zod';

import type {
  UserCreateRequestSchema,
  UserCreateResponseSchema,
  UsersReadResponseSchema,
  UserReadResponseSchema,
  UserUpdateRequestSchema,
  UserUpdateResponseSchema,
  UserDeleteResponseSchema,
} from '../../schemas';

export type UserCreateRequestType = z.infer<typeof UserCreateRequestSchema>;
export type UserCreateResponseType = z.infer<typeof UserCreateResponseSchema>;

export type UsersReadResponseType = z.infer<typeof UsersReadResponseSchema>;
export type UserReadResponseType = z.infer<typeof UserReadResponseSchema>;

export type UserUpdateRequestType = z.infer<typeof UserUpdateRequestSchema>;
export type UserUpdateResponseType = z.infer<typeof UserUpdateResponseSchema>;

export type UserDeleteResponseSchema = z.infer<typeof UserDeleteResponseSchema>;
