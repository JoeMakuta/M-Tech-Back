import { Router } from "express";
import adminLogin from "../../controllers/admin/adminLogin.js";
import adminSignup from "../../controllers/admin/adminSignup.js";
import deleteUser from "../../controllers/admin/deleteUser.js";
import GetUsers from "../../controllers/admin/getUsers.js";
import updateAdmin from "../../controllers/admin/updateAdmin.js";
import verifyToken from "../../controllers/middlewares/verifyToken.js";
import verifyUser from "../../controllers/middlewares/verifyUser.js";
const adminRoute = Router();

// adminRoute.use("/", (req, res, next) => {
//   res.send({ message: "The admin route" });
//   next();
// });

adminRoute.post("/signup", adminSignup);
adminRoute.post("/login", adminLogin);

adminRoute.get("/", verifyToken, GetUsers);
adminRoute.put("/update/:id", verifyToken, verifyUser, updateAdmin);

adminRoute.delete("/delete/:id", verifyToken, verifyUser, deleteUser);

export default adminRoute;
