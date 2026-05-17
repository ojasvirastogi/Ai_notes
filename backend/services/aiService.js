import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export const generateSummary = async (content) => {
  const result = await model.generateContent(
    `Summarize this note:\n${content}`
  );

  const response = result.response.text();

  return response;
};