import Joi from "joi";

const validateLocation = (data) => {
  return Joi.object({
    productId: Joi.string().min(24).max(24).trim().required(),
    locationDate: Joi.date().required(),
    locationDeadline : Joi.date().required(),

    renter: Joi.string().trim().min(3).max(255).required(),
    phoneNumberRenter: Joi.string().min(10).max(12).required().trim(),
    locationCharge: Joi.number().min(0).max(1000).required(),
    incomeMoney: Joi.number().min(0).max(1000).required(),
    locationAdmin: Joi.string().min(24).max(24).trim().required(),
    locationInProgress: Joi.boolean().required(),
  }).validate(data);
};

export default validateLocation;
