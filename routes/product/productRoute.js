import { Router } from "express";
import addProduct from "../../controllers/product/addProduct.js";
import updateProduct from "../../controllers/product/updateProduct.js";
const productRoute = Router();

// productRoute.get("/get", )
productRoute.post("/add", addProduct);
productRoute.put("/update/:id", updateProduct);
// productRoute.delete("/delete", )

export default productRoute;
