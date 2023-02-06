import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    userName: { type: String, unique: true, required: true },
    userEmail: { type: String, unique: true, required: true },
    passWord: { type: String, required: true },
    role: { type: Number, required: true },
  },
  { collection: "admin-data" }
);

const adminModel = mongoose.model("adminModel", adminSchema);
export default adminModel;
