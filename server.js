import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";

import adminRoute from "./routes/admin/admin.js";
import notFound from "./controllers/middlewares/notFound.js";
import productRoute from "./routes/product/productRoute.js";
import verifyToken from "./controllers/middlewares/verifyToken.js";
import CategoryRoute from "./routes/category/categoryRoute.js";
import locationRoute from "./routes/location/locationRoute.js";

dotenv.config();
const { PORT, DB_URI } = process.env;

//DB Connexion
mongoose.set("strictQuery", true);
await mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("DB Connected successfully");
  })
  .catch((error) => {
    console.log("DB Connexion failed, Error : ", error);
  });

//The App server
const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/admin", adminRoute);
app.use("/product", verifyToken, productRoute);
app.use("/category", verifyToken, CategoryRoute);
app.use("/location", verifyToken, locationRoute);

app.use(notFound);

app.listen(PORT, () => {
  console.log(http.STATUS_CODES);
  console.log("Server Running on http://localhost:" + PORT);
});
