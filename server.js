import express from "express";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello world !" });
});

app.listen(PORT, () => {
  console.log("Server Running on port : ", PORT);
});
