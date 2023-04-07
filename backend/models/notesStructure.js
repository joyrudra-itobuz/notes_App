import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  notesHeading: {
    type: String,
    trim: true,
  },
  notesContent: {
    type: String,
    trim: true,
  },
});

export const notesModel = mongoose.model("Notes", notesSchema);
