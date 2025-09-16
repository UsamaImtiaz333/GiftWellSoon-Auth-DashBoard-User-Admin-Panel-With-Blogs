// routes/dashboardroutes/GetUser.js
import express from "express";
import { getUserById } from "../../controllers/DashboardController/UserGetIdController.js";
import { authMiddleware } from "../../middlewares/auth/authMiddleware.js";

const router = express.Router();

router.get("/users/:id", authMiddleware, getUserById);

export default router;
