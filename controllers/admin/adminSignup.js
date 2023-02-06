import adminModel from "../../models/admin/adminModel.js";
import { signUpValidation } from "../../validation/adminValidation.js";

const adminSignup = (req, res) => {
  try {
    //Validate the inputs
    const { userName, userEmail, passWord } = req.body;
    const validSignUp = signUpValidation(req.body);

    if (JSON.stringify(validSignUp.value) === JSON.stringify({})) {
      res.status(400).json({ err: "Body empty" });
    } else if (validSignUp.error) {
      res.status(400).json({ err: validSignUp.error.details[0].message });
    } else {
      //Verfiy if the admin already exists

      adminModel.findOne({ userEmail: userEmail }).then((data) => {
        if (data) {
          res.status(300).json({ err: "Admin exists" });
        } else {
          //Hash the password

          
          res.status(200).json({ err: "Admin doest not exist" });
        }
      });
    }

    //Send data to the DB
  } catch (error) {
    res.status(500).json({ error: "Error on signup from server : " + error });
  }
};

export default adminSignup;
