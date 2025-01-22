import { z } from 'zod';

export const UploadDataValidations = z.object({
  csv: z
    .any()
    .refine(
      (file) =>
        file && typeof file.name === 'string' && file.name.endsWith('.csv'),
      {
        message: 'The file must be a CSV',
      },
    ),
});
