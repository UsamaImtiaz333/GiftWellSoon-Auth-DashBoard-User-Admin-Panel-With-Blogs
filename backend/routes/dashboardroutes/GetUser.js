import express from "express";
import { getAllUsers } from "../../controllers/userController.js";
import { authMiddleware } from "../../middlewares/auth/authMiddleware.js";

const router = express.Router();

// ✅ Sirf admin ko allow karo
router.get("/users", authMiddleware, getAllUsers);

export default router;
