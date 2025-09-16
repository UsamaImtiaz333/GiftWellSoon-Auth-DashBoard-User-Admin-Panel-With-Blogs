import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  author: z.string().min(3, "Author name required"),
  category: z.string().min(2, "Category required"),
  description: z.string().min(10, "Description too short"),
  // image ko validate nahi kar rahe, kyunki FileList hai
});
