import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "category-data",
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("categoryModel", categorySchema);
export default CategoryModel;
