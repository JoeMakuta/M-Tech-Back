import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


import adminRoute from "./routes/admin/admin.js";

dotenv.config();
const { PORT } = process.env;
const app = express();

//DB Connexion
mongoose.set("strictQuery", true)
mongoose
  .connect("mongodb://localhost:27017/M-tech-db")
  .then(() => {
    console.log("DB Connected successfully");
  })
  .catch((error) => {
    console.log("DB Connexion failed, Error : ", error);
  });



app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log("Server Running on port : ", PORT);
});
