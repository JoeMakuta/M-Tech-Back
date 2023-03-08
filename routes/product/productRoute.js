import { Router } from "express";
import addProduct from "../../controllers/product/addProduct.js";
const productRoute = Router();

// productRoute.get("/get", )
productRoute.post("/add", addProduct)
// productRoute.put("/update", )
// productRoute.delete("/delete", )

export default productRoute