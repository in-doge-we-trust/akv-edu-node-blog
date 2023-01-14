import { z } from 'zod';

import { IdSchema } from './shared/id';

export const UserSchema = z.object({
  id: IdSchema,
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.string().datetime(),
});
export type UserModelType = z.infer<typeof UserSchema>;

export const UserCreateSchema = UserSchema.pick({
  fullName: true,
  email: true,
  password: true,
});
export type UserModelCreateType = z.infer<typeof UserCreateSchema>;

export const UserUpdateSchema = UserSchema.pick({
  fullName: true,
  email: true,
}).partial();
export type UserModelUpdateType = z.infer<typeof UserUpdateSchema>;
