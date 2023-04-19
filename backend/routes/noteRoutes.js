import cors from "cors";
import { Router } from "express";
import { notesModel } from "../models/notesStructure.js";

export const noteRouter = Router();

noteRouter.get("/allNotes", async (req, res, next) => {
  try {
    const notes = await notesModel.find();
    res.status(200).send({
      data: notes,
      message: "Success",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
});

noteRouter.post("/newNote", async (req, res, next) => {
  try {
    if (!req.body?.notesHeading) {
      throw new Error();
    }
    const note = await notesModel(req.body);
    const response = await note.save();
    if (response?._id) {
      res.status(200).send({
        data: null,
        message: "Added!",
        status: true,
      });
    } else {
      throw new Error(response.message);
    }
  } catch (err) {
    next(err);
  }
});

noteRouter.patch("/updateNote/:id", async (req, res, next) => {
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

noteRouter.delete("/deleteNote/:id", async (req, res, next) => {
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
