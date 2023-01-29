import type { z } from 'zod';

import type {
  EntityMetadataSchemaShape,
  WithEntityMetadataSchemaMixin,
} from '../schemas';

export type EntityMetadataType = z.infer<typeof EntityMetadataSchemaShape>;

export type WithEntityMetadataType<T = unknown> = z.infer<
  typeof WithEntityMetadataSchemaMixin
> &
  T;
