import { z } from 'zod';

export const validationSchema = z.object({
  id: z.number().optional(),
  createdAt: z.date().optional(),
  description: z
    .string()
    .trim()
    .min(3, { message: 'The content must be at lest 3 characters long.' })
    .max(100, { message: 'The content must be at most 100 characters long.' }),
});

export type PropsSchema = z.infer<typeof validationSchema>;
