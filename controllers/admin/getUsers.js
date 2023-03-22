import adminModel from "../../models/admin/adminModel.js";

const GetUsers = (req, res) => {
  adminModel
    .find()
    .then((data) => {
      res.status(200).json({ message: "Success", data });
    })
    .catch((error) => {});
};

export default GetUsers;
