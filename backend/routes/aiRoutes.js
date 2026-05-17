import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { summarizeNote } from "../controllers/aiControllers.js";

const router = express.Router();

router.post( "/summary", authMiddleware, summarizeNote);

export default router;