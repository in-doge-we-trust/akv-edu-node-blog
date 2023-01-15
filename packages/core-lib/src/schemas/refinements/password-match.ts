import { z } from 'zod';

/**
 * Make sure that `password` and `passwordConfirm` match.
 *
 * Should always be used with `z.superRefine(...)`!
 */
export const refinePasswordMatch = (
  { password, passwordConfirm }: { password: string; passwordConfirm: string },
  ctx: z.RefinementCtx,
) => {
  if (passwordConfirm !== password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['passwordConfirm'],
      message: 'Passwords do not match!',
    });
  }
};
