import mongoose from "mongoose";

const productSchema = mongoose.Schema(
   {
      productName : {required : true, type : String, unique : true},
      productPhoto : {required : true, type : String, unique : true},
      productPhoto : {required : true, type : String, unique : true},
      priceMaintainance : {required : true, type : Number},
      inLocation : {required : true, type : Boolean},
      totalProductIncome : {required : true, type : Number},

   }, {collection : "product-data", timestamp : true }
)

const ProductModel = mongoose.model("productModel",productSchema)

export default ProductModel