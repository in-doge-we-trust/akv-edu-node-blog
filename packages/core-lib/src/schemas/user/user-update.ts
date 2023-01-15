import { UserSchemaShape } from './user';

export const UserUpdateSchemaShape = UserSchemaShape.pick({
  fullName: true,
  email: true,
});

export const UserUpdateSchema = UserUpdateSchemaShape;
