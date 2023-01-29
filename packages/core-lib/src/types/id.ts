import type { z } from 'zod';

import type { IdSchema, WithIdSchemaMixin } from '../schemas/id';

export type IdType = z.infer<typeof IdSchema>;

export type WithIdType<T = unknown> = z.infer<typeof WithIdSchemaMixin> & T;
