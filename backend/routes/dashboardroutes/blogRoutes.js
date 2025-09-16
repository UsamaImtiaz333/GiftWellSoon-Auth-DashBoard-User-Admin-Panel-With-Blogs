import express from "express";
import Blog from "../../model/BlogsSchema/Blog.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads folder exists
const UPLOADS_FOLDER = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_FOLDER),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new blog with image
router.post("/", upload.single("image"), async (req, res) => {
  const { title, author, category, description, date } = req.body;
  const image = req.file ? `http://localhost:3000/uploads/${req.file.filename}` : "";
  try {
    const newBlog = await Blog.create({ title, author, category, description, date, image });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
