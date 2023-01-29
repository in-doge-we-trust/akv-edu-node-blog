import { z } from 'zod';

// TODO: add format validation
export const UserPasswordSchema = z.string();

export const WithUserPasswordSchemaMixin = z.object({
  password: UserPasswordSchema,
});

export const WithUserPasswordWithConfirmationSchemaMixin =
  WithUserPasswordSchemaMixin.extend({
    passwordConfirm: z.string(),
  });

export const refineUserPasswordAndConfirmationMatch = (
  {
    password,
    passwordConfirm,
  }: z.infer<typeof WithUserPasswordWithConfirmationSchemaMixin>,
  ctx: z.RefinementCtx,
): void => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['passwordConfirm'],
      message: 'Passwords do not match!',
    });
  }
};
