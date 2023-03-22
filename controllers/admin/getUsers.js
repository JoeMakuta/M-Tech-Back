import adminModel from "../../models/admin/adminModel.js";

const GetUsers = (req, res) => {
  adminModel
    .find()
    .then((data) => {
      if (!data[0]) {
        res.status(404).json({ message: "No user", data });
      }
      res.status(200).json({ message: "Success", data });
    })
    .catch((error) => {
      res.status(500).json({ message: "Err", error });
    });
};

export default GetUsers;
