import Joi from "joi";

const validateProduct = (data) => {
  return Joi.object({
    productName: Joi.string().trim().min(3).max(255).required(),
    productPhoto: Joi.string().trim().min(3).required(),
    productPrice: Joi.number().min(3).max(255).required(),
    priceMaintainance: Joi.number().min(0).max(100).required(),
    inLocation: Joi.boolean().required(),
    totalProductIncome: Joi.number().min(0)
  }).validate(data);
};

export default validateProduct;
