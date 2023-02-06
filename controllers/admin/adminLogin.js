import adminModel from "../../models/admin/adminModel.js";
import { loginValidation } from "../../validation/adminValidation.js";
import bcrypt from "bcrypt";

const adminLogin = async (req, res) => {
  try {
    //Validate the inputs
    const { userUniqueIdentifier, passWord } = req.body;
    const validLogin = loginValidation(req.body);

    if (validLogin.error) {
      res.status(401).json({ err: validLogin.error?.details[0].message });
    } else {
      //check if the admin exists

      adminModel
        .findOne({
          $or: [
            { userName: userUniqueIdentifier },
            { userEmail: userUniqueIdentifier },
          ],
        })
        .then((user) => {
          if (user) {
            //check the password

            bcrypt.compare(passWord, user.passWord).then((data) => {
              console.log(data);
              if (data) {
                res.status(200).json({ message: "Passwords match" });
              } else
                res
                  .status(401)
                  .json({ error: "User email or password incorrect" });
            });
          } else throw error;
        })
        .catch((error) => {
          res.status(401).json({
            err: "User email or password incorrect",
          });
        });
    }

    //generate token

    //Send token
  } catch (error) {
    res.status(500).json({ err: "Server login error : " + error });
  }
};

export default adminLogin;
