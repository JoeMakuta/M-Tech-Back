import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: { required: true, type: String, unique : true},
    productPhoto: { required: true, type: String, unique : true },
    productPrice: { required: true, type: Number },
    priceMaintainance: { required: true, type: Number },
    inLocation: { required: true, type: Boolean, default: false },
    totalProductIncome: { type: Number, default: 0 },
  },
  { collection: "product-data", timestamps: true }
);

const ProductModel = mongoose.model("productModel", productSchema);

export default ProductModel;
