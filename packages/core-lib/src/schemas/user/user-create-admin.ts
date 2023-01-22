import { z } from 'zod';

import { refinePasswordMatch } from '../refinements/password-match';

import { UserSchema } from './user';

export const UserCreateAdminSchemaShape = UserSchema.pick({
  role: true,
  fullName: true,
  email: true,
  password: true,
}).extend({
  passwordConfirm: z.string(),
});

export const UserCreateAdminSchema = UserCreateAdminSchemaShape.superRefine(
  ({ password, passwordConfirm }, ctx) => {
    refinePasswordMatch({ password, passwordConfirm }, ctx);
  },
);
