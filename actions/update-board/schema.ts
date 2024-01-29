import { z } from "zod"

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Title is rquired",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
  id: z.string(),
})
