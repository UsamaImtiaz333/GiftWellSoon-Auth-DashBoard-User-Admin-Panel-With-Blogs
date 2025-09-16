import express from "express";
import { signup } from "../../controllers/UserPostSignUp.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
