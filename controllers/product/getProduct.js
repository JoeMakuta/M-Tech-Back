import ProductModel from "../../models/product/productModel.js";

export const getAllProducts = (req, res, next) => {
  try {
    ProductModel.find()
      .then((data) => {
        if (!data[0]) {
          res.status(404).json({
            message: "No product available!",
            data,
          });
        } else {
          res.status(200).json({
            message: "All the products",
            data,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  } catch (error) {}
};

export const getProductById = (req, res, next) => {
  try {
    ProductModel.findById(req.params.id.trim())
      .then((data) => {
        res.status(200).json({
          message: "Product found",
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Product not found",
          err,
        });
      });
  } catch (error) {}
};

export const getAvailableProducts = (req, res, next) => {
  try {
    ProductModel.find({ inLocation: req.query.available })
      .then((data) => {
        if (!data) {
          res.status(401).json({ message: "No product available!", data });
        } else {
          res.status(200).json({
            message:
              req.query.available == true
                ? "Products Available !"
                : "Products not available !",
            data,
          });
        }
      })
      .catch((err) => {
        res.status(200).json({ message: "No product Products !", err });
      });
  } catch (error) {}
};
