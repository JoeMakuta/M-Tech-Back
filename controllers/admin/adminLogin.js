import adminModel from "../../models/admin/adminModel.js";
import { loginValidation } from "../../validation/adminValidation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  const { TOKEN_SECRET, TOKEN_EXPIRES_IN } = process.env;
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
              if (data) {
                //generate token

                const token = jwt.sign(
                  {
                    userId: user._id,
                    userEmail: user.userEmail,
                  },
                  TOKEN_SECRET,
                  {
                    expiresIn: TOKEN_EXPIRES_IN,
                  }
                );
                if (token) {
                  //Send token
                  res.status(201).json({
                    message: "Successfully logged in as " + user.userName,
                    token,
                  });
                } else
                  res.status(401).json({ message: "Error generating token!" });
              } else
                res
                  .status(401)
                  .json({ message: "User email or password incorrect!" });
            });
          } else throw error;
        })
        .catch((error) => {
          res.status(401).json({
            message: "User email or password incorrect!",
            error,
          });
        });
    }
  } catch (error) {
    res.status(500).json({ err: "Server login error : " + error });
  }
};

export default adminLogin;
