import { generateSummary } from "../services/aiService.js";

export const summarizeNote = async (req, res) => {
  const { content } = req.body;

  try {
    const summary = await generateSummary(content);
    res.status(200).json({
      summary,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};