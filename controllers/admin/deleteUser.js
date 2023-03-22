import adminModel from "../../models/admin/adminModel.js";


const deleteUser = (req, res, next) => {
  try {
   adminModel.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(200).json({
            message: "No user with id " + req.params.id + " found !",
            data,
          });
        } else {
          res.status(200).json({
            message: "User deleted !",
            data,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error trying to delete !",
          err,
        });
      });
  } catch (error) {}
};

export default deleteUser;
