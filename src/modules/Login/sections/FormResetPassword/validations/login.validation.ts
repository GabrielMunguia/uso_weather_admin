import { z } from 'zod';

export const loginValidations = z.object({
  email: z.string().email({ message: 'The email is not valid' }),
});
