import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  notesHeading: {
    type: String,
    required: true,
    trim: true,
  },
  notesContent: {
    type: String,
    required: true,
    default: "Note",
    validate(contentData) {
      if (contentData.length === 0) {
        throw new Error("No Notes!");
      }
    },
  },
});

export const notesModel = mongoose.model("Notes", notesSchema);
