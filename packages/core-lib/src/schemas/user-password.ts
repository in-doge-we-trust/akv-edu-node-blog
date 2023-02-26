import {
  string,
  object,
  infer as zodInfer,
  RefinementCtx as ZodRefinementCtx,
  ZodIssueCode,
} from 'zod';

// TODO: add format validation
export const UserPasswordSchema = string();

export const WithUserPasswordSchemaMixin = object({
  password: UserPasswordSchema,
});

export const WithUserPasswordWithConfirmationSchemaMixin =
  WithUserPasswordSchemaMixin.extend({
    passwordConfirm: string(),
  });

export const WithUserPasswordWithOldWithConfirmationSchemaMixin =
  WithUserPasswordWithConfirmationSchemaMixin.extend({
    oldPassword: string(),
  });

export const refineUserPasswordAndConfirmationMatch = (
  {
    password,
    passwordConfirm,
  }: zodInfer<typeof WithUserPasswordWithConfirmationSchemaMixin>,
  ctx: ZodRefinementCtx,
): void => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'Passwords do not match!',
    });
  }
};

export const refineOldUserPasswordNotMatchUserPasswordAndConfirmationMatch = (
  {
    oldPassword,
    password,
    passwordConfirm,
  }: zodInfer<typeof WithUserPasswordWithOldWithConfirmationSchemaMixin>,
  ctx: ZodRefinementCtx,
): void => {
  if (oldPassword === password) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: 'New password must not match the old one!',
    });
  } else {
    refineUserPasswordAndConfirmationMatch({ password, passwordConfirm }, ctx);
  }
};
