import LocationModel from "../../models/location/locationModel.js";
import validateLocation from "../../validation/validateLocation.js";
import ProductModel from "../../models/product/productModel.js";
import adminModel from "../../models/admin/adminModel.js";

const updateLocation = async (req, res, next) => {
  try {
    //Validate the inputs
    const { error } = await validateLocation(req.body);
    if (error) {
      res.status(500).json({
        error: error?.details[0].message,
      });
      res.end();
    } else {
      //Location admin exists ?
      const admin = await adminModel.findById(req.body.locationAdmin);
      if (!admin) {
        res.status(404).json({
          message: `The admin with id : ${req.body.locationAdmin} does not exist!`,
        });
        res.end();
      } else {
        // Check if the product exists
        const product = await ProductModel.findById(req.body.productId);
        if (!product) {
          res.status(404).json({
            message: `No product with id : ${req.body.productId} found!`,
          });
        } else {
          //Location exists ? Update
          const location = await LocationModel.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
          );
          if (!location) {
            res.status(404).json({
              message: `No location with id : ${req.params.id} found!`,
            });
          } else {
            res.status(201).json({
              message: `Location Updted`,
              location
            });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: error.stack,
    });
  }
};

export default updateLocation;
