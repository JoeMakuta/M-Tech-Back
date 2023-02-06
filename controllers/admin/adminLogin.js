import adminModel from "../../models/admin/adminModel.js";
import { loginValidation } from "../../validation/adminValidation.js";

const adminLogin = async (req, res) => {
  try {
    //Validate the inputs
    const { userUniqueIdentifier, passWord } = req.body;
    const validLogin = loginValidation(req.body);

    if (validLogin.error) {
      res.status(401).json({ err: validLogin.error?.details[0].message });
    } else {
      res.status(200).json({ message: "No error on inputs login " });
    }
    //check if the admin exists

    //check the password

    //generate token

    //Send token
  } catch (error) {
    res.status(500).json({ err: "Server login error : " + error });
  }
};

export default adminLogin;
