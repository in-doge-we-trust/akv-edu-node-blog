import { z } from 'zod';

export const AuthTokenSchemaShape = z.object({
  refreshToken: z.string(),
  validUntil: z.string().datetime(),
});
export const AuthTokenSchema = AuthTokenSchemaShape;
