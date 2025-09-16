import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    image: String,
    category: String,
    description: String,
    date: String,
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
