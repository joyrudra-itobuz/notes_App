import cors from "cors";
import express from "express";
import { notesModel } from "../models/notesStructure.js";

export const app = express();

app.use(cors());

app.get("/allNotes", async (req, res) => {
  const notes = await notesModel.find({});

  try {
    res.status(200).send([
      {
        data: notes,
      },
      {
        message: "Success",
      },
      {
        status: 200,
      },
    ]);
  } catch (err) {
    res.status(404).send([
      {
        data: err,
        message: "Failed",
        status: false,
      },
    ]);
  }
});

app.post("/newNote", async (req, res) => {
  try {
    console.log(req.body);
    const note = await notesModel(req.body);
    await note.save();

    res.status(200).send([]);
  } catch (e) {
    res.status(200).send([
      {
        data: e,
        message: "Failed",
        status: false,
      },
    ]);
  }
});

app.patch("/updateNote/:id", async (req, res) => {
  console.log("Called!");
  try {
    console.log(req.body);
    await notesModel.findByIdAndUpdate(req.params.id, req.body);
    await notesModel.save();
    res.send([
      {
        data: null,
        message: "Note Updated successfully",
        status: true,
      },
    ]);
  } catch (error) {
    res.status(404).send([
      {
        data: error,
        message: "Failed",
        status: false,
      },
    ]);
  }
});

app.delete("/deleteNote/:id", async (req, res) => {
  try {
    const note = await notesModel.findByIdAndDelete(req.params.id, req.body);
    console.log("Deleted");
    if (!note) {
      res.status(404).send({
        data: null,
        message: "Not Found",
        status: false,
      });
    }
    res.status(200).send([
      {
        data: null,
        message: "Note Deletd Sucessfully",
        status: true,
      },
    ]);
  } catch (error) {
    res.status(404).send({
      data: error,
      message: "Failed",
      status: false,
    });
  }
});
