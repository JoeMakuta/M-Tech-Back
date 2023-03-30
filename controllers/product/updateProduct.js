import ProductModel from "../../models/product/productModel.js";
import validateProduct from "../../validation/productValidation.js";

const updateProduct = async (req, res, next) => {
  //Validate Inputs
  try {
    const validProduct = await validateProduct(req.body);
    console.log(validProduct);

    if (!validProduct.error) {
      //Verify if the Category exists
      CategoryModel.findOne({ _id: req.body.productCategory }).then((data) => {
        if (data) {
          ProductModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then((data) => {
              if (data) {
                res.status(200).json({
                  message: "Product updated !",
                  "new product": data,
                });
              } else {
                res.status(401).json({
                  message: "No product found!",
                  "new product": data,
                });
              }
            })
            .catch((err) => {
              res.status(500).json({
                message: "No product with id :" + req.params.id + " was found!",
                err: err.message,
              });
            });
        } else {
          res.status(404).json({
            message: `The category ${req.body.productCategory} does not exist! `,
          });
        }
      });
    } else {
      res.status(401).json({ err: validProduct.error?.details[0].message });
    }
  } catch (error) {}
};

export default updateProduct;
