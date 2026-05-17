import noteModel from "../models/noteSchema.js";



export const createNote = async (req, res) => {
  const { title, content, tags } = req.body;

  const userId = req.user.id;

  try {
    const note = await noteModel.create({
      title,
      content,
      tags,
      userId,
    });

    res.status(201).json({
      message: "Note created successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getNotes = async (req, res) => {
  const userId = req.user.id;

  try {
    const notes = await noteModel.find({ userId });

    res.status(200).json(notes);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const getSingleNote = async (req, res) => {
  const { id } = req.params;

  const userId = req.user.id;

  try {
    const note = await noteModel.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    if (note.userId.toString() !== userId) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    res.status(200).json(note);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;

  const { title, content, tags } = req.body;

  const userId = req.user.id;

  try {
    const note = await noteModel.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    if (note.userId.toString() !== userId) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    note.title = title || note.title;

    note.content = content || note.content;

    note.tags = tags || note.tags;

    await note.save();

    res.status(200).json({
      message: "Note updated successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;

  const userId = req.user.id;

  try {
    const note = await noteModel.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    if (note.userId.toString() !== userId) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      message: "Note deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};