import { z } from 'zod';

// TODO: add format validation
export const PasswordSchema = z.string();

export const PasswordSchemaMixin = z.object({
  password: PasswordSchema,
});

export const PasswordWithConfirmationSchemaMixin = PasswordSchemaMixin.extend({
  passwordConfirm: z.string(),
});

export const refinePasswordConfirmMatch = (
  {
    password,
    passwordConfirm,
  }: z.infer<typeof PasswordWithConfirmationSchemaMixin>,
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
