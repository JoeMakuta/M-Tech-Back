import ProductModel from "../../models/product/productModel.js";

const addProduct = (req, res, next) => {
  // Validate Inputs

  // Verify if the products already exists

  // Save the product
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
};

export default addProduct;
