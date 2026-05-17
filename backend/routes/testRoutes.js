import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Ojasv");
});

router.post("/test", (req, res) => {
  console.log(req.body);

  res.send("Data Received");
});
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

export default router;