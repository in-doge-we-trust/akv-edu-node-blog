import { z } from 'zod';

import { UserRoles } from '../enums/user-roles';
import { WithIdSchemaMixin } from './id';

export const UserRoleSchema = z
  .object({
    role: z.nativeEnum(UserRoles),
  })
  .merge(WithIdSchemaMixin);
