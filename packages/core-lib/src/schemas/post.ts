import { z } from 'zod';

import { IdSchema } from './id';

export const PostSchemaShape = z.object({
  id: IdSchema,
  title: z.string(),
  content: z.string(),
});
