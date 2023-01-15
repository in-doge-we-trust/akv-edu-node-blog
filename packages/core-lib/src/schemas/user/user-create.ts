import { z } from 'zod';

import { refinePasswordMatch } from '../refinements/password-match';

import { UserSchemaShape } from './user';

export const UserCreateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
  password: true,
}).extend({
  passwordConfirm: z.string(),
});

export const UserCreateSchema = UserCreateSchemaShape.superRefine(
  ({ password, passwordConfirm }, ctx) => {
    refinePasswordMatch({ password, passwordConfirm }, ctx);
  },
);
