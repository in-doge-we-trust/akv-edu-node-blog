import { z } from 'zod';

import { UserRolesEnum } from '../enums/user-roles';
import { WithIdSchemaMixin } from './id';

export const UserRoleModelSchema = z
  .object({
    role: z.nativeEnum(UserRolesEnum),
  })
  .merge(WithIdSchemaMixin);
