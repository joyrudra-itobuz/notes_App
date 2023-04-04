import mongoose from "mongoose";
import express from "express";
import * as noteRouter from "./routes/noteRoutes.mjs";

const port = 6060;

const app = express();

app.use(express.json());

try {
  mongoose.connect(
    "mongodb+srv://joyrudra_itobuz:balmerol@cluster0.r8mjb62.mongodb.net/notes_App"
  );
} catch (err) {
  console.log(err, "Couldn't connect");
}

app.use(noteRouter.app);

app.listen(port, () => {
  console.log("Server Running on http://127.0.0.1:6060");
});
