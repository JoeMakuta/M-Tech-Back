import CategoryModel from "../../models/category/categoryModel.js";
import { getCategoryValidation } from "../../validation/categoryValidation.js";

export const getCategory = (req, res, next) => {
  try {
    CategoryModel.find()
      .then((data) => {
        if (!data[0]) {
          res.status(404).json({
            message: "No category available!",
            data,
          });
        } else {
          res.status(200).json({
            message: "All the categories",
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

export const updateCategory = (req, res, next) => {};

export const deleteCategory = (req, res, next) => {
  try {
    CategoryModel.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: "No category with id " + req.params.id + " found !",
            data,
          });
        } else {
          res.status(200).json({
            message: "Category deleted !",
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

export const addCategory = async (req, res, next) => {
  try {
    // Validate the inputs
    const validCategory = await getCategoryValidation(req.body);
    if (!validCategory.error) {
      // Verify if the category already exists
      CategoryModel.findOne({ categoryName: req.body.categoryName })
        .then((data) => {
          if (!data) {
            // Save the category
            new CategoryModel({
              ...req.body,
            })
              .save()
              .then((data) => {
                res
                  .status(201)
                  .json({ message: "The category successfully saved !" });
              })
              .catch((error) => {
                res.status(500).json({ message: error.message, error });
              });
          } else {
            res.status(409).json({
              message: `The category with name ${req.body.categoryName} already exists!`,
            });
          }
        })
        .catch((error) => {
          res.status(401).json({ message: error.message, error });
        });
    } else {
      res.status(400).json({
        message: validCategory.error?.details[0].message,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
