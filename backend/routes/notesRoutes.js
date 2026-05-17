import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
  createNote,
  getNotes,
   getSingleNote,
     updateNote,
       deleteNote,

} from "../controllers/notesControllers.js";

const router = express.Router();

router.post("/create", authMiddleware, createNote);

router.get("/all", authMiddleware, getNotes);

router.get("/:id", authMiddleware, getSingleNote);

router.put("/update/:id", authMiddleware, updateNote);
router.delete("/delete/:id", authMiddleware, deleteNote);

export default router;