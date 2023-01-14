import { z } from 'zod';

export const IdSchema = z.string().uuid();

export type IdType = z.infer<typeof IdSchema>;
