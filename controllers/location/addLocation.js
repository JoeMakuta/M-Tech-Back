import validateLocation from "../../validation/validateLocation.js";
import LocationModel from "../../models/location/locationModel.js";
import adminModel from "../../models/admin/adminModel.js";
import ProductModel from "../../models/product/productModel.js";

const addLocation = async (req, res, next) => {
  try {
    //Validate the location inputs
    const validLocation = await validateLocation(req.body);
    if (!validLocation.error) {
      //LoactionAdmin exists ?
      adminModel
        .findById(req.body.locationAdmin)
        .then((data) => {
          if (!data) {
            res.status(404).json({ error: "The admin does not exist!" });
          } else {
            //Product exists ?
            ProductModel.findById(req.body.productId)
              .then((product) => {
                if (!product) {
                  res
                    .status(404)
                    .json({ error: "The product does not exist!" });
                } else {
                  //The product is in location ??
                  if (product.inLocation) {
                    res.status(406).json({
                      error: `The product ${product.productName} is already in location!`,
                    });
                  } else {
                    //Save the location
                    new LocationModel({
                      ...req.body,
                    })
                      .save()
                      .then((location) => {
                        ProductModel.findByIdAndUpdate(
                          product._id,
                          {
                            inLocation: req.body.locationInProgress,
                          },
                          { new: true }
                        )
                          .then((data) => {
                            res.status(201).json({
                              message: "Success",
                              location,
                              product: data,
                            });
                          })
                          .catch((error) => {
                            res.status(500).json({ error: error.stack });
                          });
                      })
                      .catch((error) => {
                        res.status(500).json({ error: error.stack });
                      });
                  }
                }
              })
              .catch((error) => {
                res.status(500).json({ error: error.message });
              });
          }
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } else {
      res.status(500).json({
        error: validLocation.error?.details[0].message,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.stack });
  }
};

export default addLocation;
