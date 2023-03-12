import type { infer as zodInfer } from 'zod';

import type {
  UserRoleCreateSchema,
  UserRoleModelSchema,
  UserRoleReadSchema,
  UserRoleUpdateSchema,
} from '../schemas';

export type UserRoleModelType = zodInfer<typeof UserRoleModelSchema>;

export type UserRoleCreateDtoType = zodInfer<typeof UserRoleCreateSchema>;

export type UserRoleReadDtoType = zodInfer<typeof UserRoleReadSchema>;

export type UserRoleUpdateDtoType = zodInfer<typeof UserRoleUpdateSchema>;
