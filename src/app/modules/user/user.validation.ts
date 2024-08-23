import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string({
    message: 'Id is a must.',
    invalid_type_error: 'id should must be a string',
  }),
  password: z
    .string()
    .max(20, { message: 'Password cannot be less than 20 characters' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
