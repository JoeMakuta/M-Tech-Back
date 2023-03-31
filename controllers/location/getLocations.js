import LocationModel from "../../models/location/locationModel.js";

const getLocations = async (req, res, next) => {
  try {
    const location = await LocationModel.find()
      .populate("productId")
      .populate("locationAdmin", "_id, userName");
    if (location[0]) {
      res.status(200).json({ message: "Success!", location });
    } else {
      res.status(404).json({ error: "No Location found !", location });
    }
    console.log("The location : ", location);
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.stack });
  }
};

export default getLocations;
