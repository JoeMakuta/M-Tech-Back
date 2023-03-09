import { Router } from "express";
import addProduct from "../../controllers/product/addProduct.js";
import deleteProduct from "../../controllers/product/deleteProduct.js";
import {
  getAllProducts,
  getAvailableProducts,
  getProductById,
} from "../../controllers/product/getProduct.js";
import updateProduct from "../../controllers/product/updateProduct.js";
const productRoute = Router();

productRoute.get("/", getAllProducts);
productRoute.get("/available", getAvailableProducts);
productRoute.post("/add", addProduct);

productRoute.get("/:id", getProductById);
productRoute.put("/update/:id", updateProduct);
productRoute.delete("/delete/:id", deleteProduct);

export default productRoute;
