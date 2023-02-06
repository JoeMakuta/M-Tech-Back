import { Router } from "express";
import adminLogin from "../../controllers/admin/adminLogin.js";
import adminSignup from "../../controllers/admin/adminSignup.js";
const adminRoute = Router();

// adminRoute.use("/", (req, res, next) => {
//   res.send({ message: "The admin route" });
//   next();
// });

adminRoute.post("/signup", adminSignup);
adminRoute.post("/login", adminLogin);

export default adminRoute;
