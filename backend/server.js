import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authrouter/PostSignUp.js";
import loginRoute from "./routes/authrouter/PostLogin.js";
import protectedRoute from "./routes/authrouter/protectedRoutes.js";
import userRoutes from "./routes/dashboardroutes/GetUser.js";
import getuserid from "./routes/dashboardroutes/GetUserId.js";
import blogRoutes from "./routes/dashboardroutes/blogRoutes.js";
import path from "path";
import fs from "fs";

const app = express();

// JSON parsing
app.use(express.json());

// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Ensure uploads folder exists
const UPLOADS_FOLDER = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

// Serve uploads folder with CORS headers
app.use(
  "/uploads",
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    next();
  },
  express.static(UPLOADS_FOLDER)
);

// DB connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoute);
app.use("/api", protectedRoute);
app.use("/api", userRoutes);
app.use("/api", getuserid);
app.use("/api/blogs", blogRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
