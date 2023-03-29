import adminModel from "../../models/admin/adminModel.js";
import { signUpValidation } from "../../validation/adminValidation.js";

const updateAdmin = async (req, res, next) => {
  //Validate Inputs
  try {
    const validAdmin = await signUpValidation(req.body);

    if (!validAdmin.error) {
      adminModel
        .findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => {
          if (data) {
            res.status(200).json({
              message: "Admin updated !",
            });
          } else {
            res.status(401).json({
              message: "No Admin found!",
            });
          }
        })
        .catch((err) => {
          res.status(404).json({
            message: "No user with id :" + req.params.id + " was found!",
            err: err.message,
          });
        });
    } else {
      res.status(401).json({ err: validAdmin.error?.details[0].message });
    }
  } catch (error) {}
};

export default updateAdmin;
