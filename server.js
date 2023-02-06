import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";

import adminRoute from "./routes/admin/admin.js";

dotenv.config();
const { PORT } = process.env;

//DB Connexion
mongoose.set("strictQuery", true);
await mongoose
  .connect("mongodb://localhost:27017/M-tech-db")
  .then(() => {
    console.log("DB Connected successfully");
  })
  .catch((error) => {
    console.log("DB Connexion failed, Error : ", error);
  });

//The App server
const app = express();
app.use(express.json());
app.use("/admin", adminRoute);

app.listen(PORT, () => {
   // console.log(http.STATUS_CODES);
  console.log("Server Running on http://localhost:" + PORT);
});
