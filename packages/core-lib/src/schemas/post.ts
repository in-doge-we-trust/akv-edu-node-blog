import { z } from 'zod';

import { IdSchema } from './id';

export const PostSchemaShape = z.object({
  id: IdSchema,
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
