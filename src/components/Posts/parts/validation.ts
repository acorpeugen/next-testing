import {z} from "zod";

export const postSchema = z.object({
    title: z.string(),
    text: z.string()
})

export type PostSchema = z.infer<typeof postSchema>