import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../../controllers/category/categoryCrud.js";

const CategoryRoute = Router();

CategoryRoute.delete("/delete", deleteCategory);
CategoryRoute.get("/get", getCategory);
CategoryRoute.post("/add", addCategory);
CategoryRoute.put("/update", updateCategory);

export default CategoryRoute
