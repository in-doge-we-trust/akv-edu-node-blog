import { z } from 'zod';

import { UserRoles } from '../enums/user-roles';

export const UserRoleSchema = z.nativeEnum(UserRoles);
