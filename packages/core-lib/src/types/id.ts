import type { z } from 'zod';
import type { IdSchema } from '../schemas/id';

export type IdType = z.infer<typeof IdSchema>;
