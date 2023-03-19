/* eslint-disable @typescript-eslint/no-namespace */

import type { z } from 'zod';

import type {
  UserCreateRequestSchema,
  UserCreateResponseSchema,
  UsersReadResponseSchema,
  UserReadResponseSchema,
  UserUpdateRequestSchema,
  UserUpdateResponseSchema,
  UserDeleteResponseSchema,
  PostCreateRequestSchema,
  PostCreateResponseSchema,
  PostsReadResponseSchema,
  PostReadResponseSchema,
  PostUpdateRequestSchema,
  PostUpdateResponseSchema,
  PostDeleteResponseSchema,
  UserAuthInfoCreateRequestSchema,
  UserAuthInfoCreateResponseSchema,
  UserAuthInfosReadResponseSchema,
  UserAuthInfoDeleteResponseSchema,
  UserAuthInfoUpdateTokenRequestSchema,
  UserAuthInfoUpdatePasswordRequestSchema,
  UserAuthInfoReadResponseSchema,
} from '../schemas';

export namespace ApiTypes {
  export namespace User {
    export type UserCreateRequestType = z.infer<typeof UserCreateRequestSchema>;
    export type UserCreateResponseType = z.infer<
      typeof UserCreateResponseSchema
    >;

    export type UsersReadResponseType = z.infer<typeof UsersReadResponseSchema>;
    export type UserReadResponseType = z.infer<typeof UserReadResponseSchema>;

    export type UserUpdateRequestType = z.infer<typeof UserUpdateRequestSchema>;
    export type UserUpdateResponseType = z.infer<
      typeof UserUpdateResponseSchema
    >;

    export type UserDeleteResponseSchema = z.infer<
      typeof UserDeleteResponseSchema
    >;
  }

  export namespace Post {
    export type PostCreateRequestType = z.infer<typeof PostCreateRequestSchema>;
    export type PostCreateResponseType = z.infer<
      typeof PostCreateResponseSchema
    >;

    export type PostsReadResponseType = z.infer<typeof PostsReadResponseSchema>;
    export type PostReadResponseType = z.infer<typeof PostReadResponseSchema>;

    export type PostUpdateRequestType = z.infer<typeof PostUpdateRequestSchema>;
    export type PostUpdateResponseType = z.infer<
      typeof PostUpdateResponseSchema
    >;

    export type PostDeleteResponseSchema = z.infer<
      typeof PostDeleteResponseSchema
    >;
  }

  export namespace UserAuthInfo {
    export type UserAuthInfoCreateRequestType = z.infer<
      typeof UserAuthInfoCreateRequestSchema
    >;
    export type UserAuthInfoCreateResponseType = z.infer<
      typeof UserAuthInfoCreateResponseSchema
    >;

    export type UserAuthInfosReadResponseType = z.infer<
      typeof UserAuthInfosReadResponseSchema
    >;
    export type UserAuthInfoReadResponseType = z.infer<
      typeof UserAuthInfoReadResponseSchema
    >;

    export type UserAuthInfoUpdateTokenRequestSchema = z.infer<
      typeof UserAuthInfoUpdateTokenRequestSchema
    >;

    export type UserAuthInfoUpdatePasswordRequestSchema = z.infer<
      typeof UserAuthInfoUpdatePasswordRequestSchema
    >;

    export type UserAuthInfoDeleteResponseSchema = z.infer<
      typeof UserAuthInfoDeleteResponseSchema
    >;
  }
}
