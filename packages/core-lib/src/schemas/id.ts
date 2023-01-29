import { z } from 'zod';

export const IdSchema = z.string().uuid();

export const WithIdSchemaMixin = z.object({
  id: IdSchema,
});
