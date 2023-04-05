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
        data: "None",
      },
      {
        message: "Not Found",
      },
      {
        status: 404,
      },
    ]);
  }
});

app.post("/newNote", async (req, res) => {
  try {
    console.log(req.body);
    // const note = await notesModel(req.body);
    // await note.save();

    res.status(200).send([
      {
        data: null,
        message: "Note created successfully",
        status: true,
      },
    ]);
  } catch (e) {
    res.status(200).send([
      {
        data: e,
        message: "Failed",
        status: false,
      },
    ]);
  }

  // try {
  //   await note.save();
  //   res.send([
  //     {
  //       data: note,
  //     },
  //     {
  //       message: "Success",
  //     },
  //     {
  //       status: 200,
  //     },
  //   ]);
  // } catch (err) {
  //   res.status(404).send([
  //     {
  //       data: "None",
  //     },
  //     {
  //       message: "Not found",
  //     },
  //     {
  //       status: 404,
  //     },
  //   ]);
  // }
});

app.patch("/updateNote/:id", async (req, res) => {
  try {
    await notesModel.findByIdAndUpdate(req.params.id, req.body);
    await notesModel.save();
    res.send([
      {
        data: "notes",
      },
      {
        message: "Success",
      },
      {
        status: 200,
      },
    ]);
  } catch (error) {
    res.status(404).send([
      {
        data: notes,
      },
      {
        message: "Not found",
      },
      {
        status: 404,
      },
    ]);
  }
});

app.delete("/deleteNote/:id", async (req, res) => {
  try {
    const note = await notesModel.findByIdAndDelete(req.params.id, req.body);

    if (!note) {
      res.status(404).send([
        {
          data: "None",
        },
        {
          message: "Not Found",
        },
        {
          status: 404,
        },
      ]);
    }

    res.status(200).send([
      {
        data: note,
      },
      {
        message: "Success",
      },
      {
        status: 200,
      },
    ]);
  } catch (error) {
    res.status(404).send([
      {
        data: "None",
      },
      {
        message: "Not Found",
      },
      {
        status: 404,
      },
    ]);
  }
});
