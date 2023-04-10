import express from "express";
import * as noteRouter from "./routes/noteRoutes.js";
import cors from "cors";
import { db } from "./connection/connection.js";

const port = 6060;

const app = express();

app.use(express.json());

app.use(cors());

app.use(noteRouter.app);

app.use((err, req, res, next) => {
  next(new Error("Page not found"));
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({
      data: null,
      message: err.message,
      success: false,
    });
  }
});

app.listen(port, () => {
  console.log("Server Running on http://127.0.0.1:6060");
});
