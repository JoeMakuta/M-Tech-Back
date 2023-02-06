import adminModel from "../../models/admin/adminModel.js";
import { signUpValidation } from "../../validation/adminValidation.js";
import bcrypt from "bcrypt";

const adminSignup = async (req, res) => {
  try {
    //Validate the inputs
    const { userName, userEmail, passWord } = req.body;
    const validSignUp = signUpValidation(req.body);

    if (JSON.stringify(validSignUp.value) === JSON.stringify({})) {
      res.status(204).json({ err: "Body empty" });
    } else if (validSignUp.error) {
      res.status(400).json({ err: validSignUp.error.details[0].message });
    } else {
      //Verfiy if the admin already exists

      adminModel
        .findOne({ $or: [{ userEmail: userEmail }, { userName: userName }] })
        .then((data) => {
          if (data) {
            res.status(403).json({ err: "Admin exists" });
          } else {
            //Hash the password

            bcrypt
              .genSalt(10)
              .then((salt) => {
                bcrypt
                  .hash(passWord, salt)
                  .then((cryptedPassWord) => {
                    //Send data to the DB
                    new adminModel({
                      ...req.body,
                      passWord: cryptedPassWord,
                    })
                      .save()
                      .then((data) => {
                        res.status(201).json({ message: "Admin Saved" });
                      })
                      .catch((error) => {
                        res.status(500).json({
                          err: "Error saving the admin : " + error,
                        });
                      });
                  })
                  .catch((error) => {
                    res.status(500).json({ err: "Error : " + error });
                  });
              })
              .catch((err) => {
                res.status(500).json({ err: "Error generating salt" });
              });
          }
        });
    }
  } catch (error) {
    res.status(500).json({ error: "Error on signup from server : " + error });
  }
};

export default adminSignup;
