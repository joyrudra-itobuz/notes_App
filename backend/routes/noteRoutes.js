import mongoose from "mongoose";
import express from "express";
import { notesModel } from "../models/notesStructure.js";

export const app = express();

app.get("/allNotes", async (req, res) => {
  const notes = await notesModel.find({});

  try {
    res.send(notes);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.post("/newNote", async (req, res) => {
  const note = await notesModel(req.body);

  try {
    await note.save();
    res.send(note);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.patch("/updateNote/:id", async (req, res) => {
  try {
    await notesModel.findByIdAndUpdate(req.params.id, req.body);
    await notesModel.save();
    res.send("note");
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/deleteNote/:id", async (req, res) => {
  try {
    const note = await notesModel.findByIdAndDelete(req.params.id, req.body);

    if (!note) {
      res.status(404).send("No Note Found");
    }

    res.status(200).send();
  } catch (error) {
    res.status(404).send(error);
  }
});
