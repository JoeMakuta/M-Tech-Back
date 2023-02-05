import express from "express";
import dotenv from "dotenv";
import adminRoute from "./routes/admin/admin.js";

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log("Server Running on port : ", PORT);
});
