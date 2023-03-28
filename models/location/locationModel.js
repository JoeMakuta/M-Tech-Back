import mongoose from "mongoose";

const locationSchema = mongoose.Schema(
  {
    productId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: "productModel",
    },
    locationDate: { type: Date, required: true },
    locationDeadline: { type: Date, required: true },
    renter: { type: String, required: true },
    phoneRenter: { type: String, required: false },
    locationTransport: { type: Number, required: false },
    incomeMoney: { type: Number, required: true },
    locationUser: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminModel",
    },
    validLocation: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "location-data", timestamps: true }
);

const LocationModel = mongoose.model("locationModel", locationSchema);

export default LocationModel;
