import mongoose from "mongoose";
import * as details from "../config/config.js";

try {
  mongoose.connect(
    `mongodb+srv://${details.credentials.userName}:${details.credentials.password}@${details.credentials.cluster}.mongodb.net/${details.credentials.collectionId}`
  );
  console.log(
    "Connected to DataBase with\nUsername : ",
    details.credentials.userName,
    "\nPassword :",
    details.credentials.password,
    "\nCollection ID : ",
    details.credentials.collectionId
  );
  mongoose.connection.on("error", (err) => {
    console.log("Error in connection", err);
  });
  mongoose.connection.once("open", () => {
    console.log("Connected Sucessfully");
  });
} catch (err) {
  console.log(err, "Couldn't connect");
}

export const db = mongoose.connection;
