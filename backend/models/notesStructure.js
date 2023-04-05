import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  notesHeading: {
    type: String,
    required: true,
  },
  notesContent: {
    type: String,
    trim: true,
  },
});

export const notesModel = mongoose.model("Notes", notesSchema);
