import { z } from 'zod';

export const EntityMetadataSchemaShape = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const WithEntityMetadataSchemaMixin = EntityMetadataSchemaShape;
