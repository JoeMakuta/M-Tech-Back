import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../../controllers/category/categoryCrud.js";

const CategoryRoute = Router();

CategoryRoute.get("/get", getCategory);
CategoryRoute.post("/add", addCategory);

CategoryRoute.delete("/delete/:id", deleteCategory);
CategoryRoute.put("/update/:id", updateCategory);

export default CategoryRoute
