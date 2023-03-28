import Joi from "joi";

export const getCategoryValidation = (data) => {
  return Joi.object({
   categoryName: Joi.string().trim().min(3).max(255).required(),
  }).validate(data);
};
