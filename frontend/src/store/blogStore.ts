import { create } from "zustand";
import type { Blog } from "../types/blog.ts";

interface BlogStore {
  blogs: Blog[];
  setBlogs: (blogs: Blog[]) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
}));
