import { z } from 'zod';

export const loginValidations = z.object({
  email: z.string().email({ message: 'The email is not valid' }),
  password: z.string().min(1, { message: 'The password is required' }),
});
