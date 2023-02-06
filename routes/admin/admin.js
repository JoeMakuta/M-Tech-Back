import { Router } from "express";
import adminSignup from "../../controllers/admin/adminSignup.js";
const adminRoute = Router();

// adminRoute.use("/", (req, res, next) => {
//   res.send({ message: "The admin route" });
//   next();
// });

adminRoute.post("/signup", adminSignup);

export default adminRoute;
