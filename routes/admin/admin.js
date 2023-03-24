import { Router } from "express";
import adminLogin from "../../controllers/admin/adminLogin.js";
import adminSignup from "../../controllers/admin/adminSignup.js";
import deleteUser from "../../controllers/admin/deleteUser.js";
import GetUsers from "../../controllers/admin/getUsers.js";
import verifyToken from "../../controllers/middlewares/verifyToken.js";
const adminRoute = Router();

// adminRoute.use("/", (req, res, next) => {
//   res.send({ message: "The admin route" });
//   next();
// });

adminRoute.post("/signup", adminSignup);
adminRoute.post("/login", adminLogin);

adminRoute.get("/", verifyToken, GetUsers);

adminRoute.delete("/delete/:id", verifyToken, deleteUser);

export default adminRoute;
