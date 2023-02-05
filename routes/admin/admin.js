import { Router } from "express";
const adminRoute = Router();

adminRoute.use("/", (req, res) => {
  res.send({ message: "The admin route" });
});

export default adminRoute