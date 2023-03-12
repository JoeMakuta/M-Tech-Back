import ProductModel from "../../models/product/productModel.js";

const deleteProduct = (req, res, next) => {
  try {
    ProductModel.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(200).json({
            message: "No Product with id " + req.params.id + " found !",
            data,
          });
        } else {
          res.status(200).json({
            message: "Product deleted !",
            data,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error trying to deleted !",
          err,
        });
      });
  } catch (error) {}
};

export default deleteProduct;
