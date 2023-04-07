import mongoose from "mongoose";
import express from "express";
import * as noteRouter from "./routes/noteRoutes.js";
import cors from "cors";
import * as credentials from "./credentials/mongooseCredentials.js";

const port = 6060;

const app = express();

app.use(express.json());
app.use(cors());

try {
  mongoose.connect(
    `mongodb+srv://${credentials.userName}:${credentials.password}@cluster0.r8mjb62.mongodb.net/${credentials.collectionId}`
  );
  console.log(
    "Connected to DataBase with\nUsername : ",
    credentials.userName,
    "\nPassword :",
    credentials.password,
    "\nCollection ID : ",
    credentials.collectionId
  );
} catch (err) {
  console.log(err, "Couldn't connect");
}

app.use(noteRouter.app);

app.listen(port, () => {
  console.log("Server Running on http://127.0.0.1:6060");
});
