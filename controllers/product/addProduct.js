import ProductModel from "../../models/product/productModel.js";
import validateProduct from "../../validation/productValidation.js";
import CategoryModel from "../../models/category/categoryModel.js";

const addProduct = async (req, res, next) => {
  // Validate Inputs

  const validProduct = await validateProduct(req.body);
  if (!validProduct.error) {
    //Verify if the Category exists
    CategoryModel.findOne({ _id: req.body.productCategory }).then((data) => {
      if (data) {
        // Verify if the products already exists
        ProductModel.findOne({ productName: req.body.productName })
          .then((data) => {
            if (!data) {
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
            } else {
              res.status(401).json({
                message: `The product named : ${req.body.productName} already exists!`,
              });
            }
          })
          .catch((err) => {
            res.status(401).json({ message: err.message, err: err.stack });
          });
      } else {
        res
          .status(404)
          .json({
            message: `The category ${req.body.productCategory} does not exist! `,
          });
      }
    });
  } else {
    res.status(401).json({ err: validProduct.error?.details[0].message });
  }
};

export default addProduct;
