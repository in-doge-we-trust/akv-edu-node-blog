import { z } from 'zod';

export const UserAuthTokenSchemaShape = z.object({
  refreshToken: z.string(),
  validUntil: z.string().datetime(),
});

export const AuthTokenSchema = UserAuthTokenSchemaShape;
