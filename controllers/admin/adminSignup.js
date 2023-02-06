import adminModel from "../../models/admin/adminModel.js";
import { signUpValidation } from "../../validation/adminValidation.js";

const adminSignup = (req, res) => {
  //Validate the inputs

  const validSignUp = signUpValidation(req.body);

  if (JSON.stringify(validSignUp.value) === JSON.stringify({})) {
    res.status(400).json({ err: "Body empty" });
  } else if (validSignUp.error) {
    res.status(400).json({ err: validSignUp.error.details[0].message });
  } else {
    //Verfiy if the admin already exists

    
    res.status(209).json({ message: "No error in signUp" });
  }

  //Hash the password

  //Send data to the DB
};

export default adminSignup;
