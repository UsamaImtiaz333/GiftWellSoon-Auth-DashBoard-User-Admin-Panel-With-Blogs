import express from "express";
import { authMiddleware } from "../../middlewares/auth/authMiddleware.js";


const router = express.Router();

// Ye route tabhi chalega jab authMiddleware token ko verify kare
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.role}, this is your dashboard` });
});

export default router;
