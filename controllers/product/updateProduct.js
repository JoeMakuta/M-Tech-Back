import ProductModel from "../../models/product/productModel.js";

const updateProduct = (req, res, next) => {
  try {
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
          message : "No product with id :"+req.params.id+" was found!",
          err: err.message,
        });
      });
  } catch (error) {}
};

export default updateProduct;
