import { refinePasswordMatch } from '../refinements/password-match';
import { UserCreateSchemaShape } from './user-create';

export const UserUpdatePasswordSchemaShape = UserCreateSchemaShape.pick({
  password: true,
  passwordConfirm: true,
});

export const UserUpdatePasswordSchema =
  UserUpdatePasswordSchemaShape.superRefine(
    ({ password, passwordConfirm }, ctx) => {
      refinePasswordMatch({ password, passwordConfirm }, ctx);
    },
  );
