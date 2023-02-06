import Joi from "joi";

const signUpValidation = (data) => {
  return Joi.object({
    userName: Joi.string().min(3).max(255).required(),
    userEmail: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ),
    passWord: Joi.string().min(6).max(255).required(),
  }).validate(data);
};

export { signUpValidation };
