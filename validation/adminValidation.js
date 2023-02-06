import Joi from "joi";

const signUpValidation = (data) => {
  return Joi.object({
    userName: Joi.string().min(3).max(255).required(),
    userEmail: Joi.string().required().email(),
    passWord: Joi.string().min(6).max(255).required(),
    role: Joi.number().min(1).max(2).required(),
  }).validate(data);
};

const loginValidation = (data) => {
  return Joi.object({
    userUniqueIdentifier: Joi.alternatives()
      .try(
        Joi.string().min(3).max(255).required(),
        Joi.string().required().email()
      )
      .required(),
    passWord: Joi.string().min(6).max(255).required(),
  }).validate(data);
};

export { signUpValidation, loginValidation };
