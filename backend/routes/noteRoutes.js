import cors from "cors";
import express from "express";
import { notesModel } from "../models/notesStructure.js";

export const app = express();

app.use(cors());

app.get("/allNotes", async (req, res, next) => {
  const notes = await notesModel.find({});

  try {
    res.status(200).send({
      data: notes,
      message: "Success",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
});

app.post("/newNote", async (req, res, next) => {
  try {
    const note = await notesModel(req.body);
    await note.save();

    res.status(200).send({
      data: null,
      message: "Added!",
      status: true,
    });
  } catch (err) {
    next(err);
  }
});

app.patch("/updateNote/:id", async (req, res, next) => {
  try {
    await notesModel.findByIdAndUpdate(req.params.id, req.body);
    await notesModel.save();
    res.send({
      data: null,
      message: "Note Updated successfully",
      status: true,
    });
  } catch (err) {
    next(err);
  }
});

app.delete("/deleteNote/:id", async (req, res, next) => {
  try {
    const note = await notesModel.findByIdAndDelete(req.params.id, req.body);
    if (!note) {
      res.status(404).send({
        data: null,
        message: "Not Found",
        status: false,
      });
    }
    res.status(200).send({
      data: null,
      message: "Note Deletd Sucessfully",
      status: true,
    });
  } catch (err) {
    next(err);
  }
});
