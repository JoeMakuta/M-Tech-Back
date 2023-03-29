import mongoose from "mongoose";

const locationSchema = mongoose.Schema(
  {
    productId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "productModel",
    },
    locationDate: { type: Date, required: true, default: Date.now() },
    locationDeadline: { type: Date, required: true },
    renter: { type: String, required: true },
    phoneNumberRenter: { type: String, required: false },
    locationCharge: { type: Number, required: false },
    incomeMoney: { type: Number, required: true },
    locationAdmin: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminModel",
    },
    locationInProgress: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { collection: "location-data", timestamps: true }
);

const LocationModel = mongoose.model("locationModel", locationSchema);

export default LocationModel;
