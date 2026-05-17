import express from "express";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js"
import aiRoutes from "./routes/aiRoutes.js"


import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config();

const app = express();
connectDb();
app.use(express.json());

app.use("/", testRoutes);
app.use("/api/auth",authRoutes)
app.use("/api/notes",notesRoutes)
app.use("/api/ai", aiRoutes);

app.listen(5000, () => {
  console.log("Server Started");
});