import type { z } from 'zod';

import type {
  PostCreateRequestSchema,
  PostCreateResponseSchema,
  PostsReadResponseSchema,
  PostReadResponseSchema,
  PostUpdateRequestSchema,
  PostUpdateResponseSchema,
  PostDeleteResponseSchema,
} from '../../schemas';

export type PostCreateRequestType = z.infer<typeof PostCreateRequestSchema>;
export type PostCreateResponseType = z.infer<typeof PostCreateResponseSchema>;

export type PostsReadResponseType = z.infer<typeof PostsReadResponseSchema>;
export type PostReadResponseType = z.infer<typeof PostReadResponseSchema>;

export type PostUpdateRequestType = z.infer<typeof PostUpdateRequestSchema>;
export type PostUpdateResponseType = z.infer<typeof PostUpdateResponseSchema>;

export type PostDeleteResponseSchema = z.infer<typeof PostDeleteResponseSchema>;
