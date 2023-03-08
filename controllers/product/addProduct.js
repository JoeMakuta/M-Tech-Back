import ProductModel from "../../models/product/productModel.js";
import validateProduct from "../../validation/productValidation.js";

const addProduct = async (req, res, next) => {
  // Validate Inputs

  const validProduct = await validateProduct(req.body);
  if (!validProduct.error) {
    new ProductModel({
      ...req.body,
    })
      .save()
      .then((data) => {
        res.status(200).json({ message: "Success" });
      })
      .catch((err) => {
        res.status(400).json({ message: err.stack, err });
      });
  }else{
    res.status(401).json({ err: validProduct.error?.details[0].message });
  }

  // Verify if the products already exists

  // Save the product
};

export default addProduct;
