import { z } from 'zod';

import { UserRoles } from '../enums/user-roles';

export const UserRolesSchema = z.nativeEnum(UserRoles);
