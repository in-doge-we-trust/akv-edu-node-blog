import { WithIdSchemaMixin } from './id';
import { WithUserPasswordSchemaMixin } from './user-password';

export const UserAuthInfoSchemaShape = WithIdSchemaMixin.merge(
  WithUserPasswordSchemaMixin,
);

export const UserAuthInfoSchema = UserAuthInfoSchemaShape;
