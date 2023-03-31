import LocationModel from "../../models/location/locationModel.js";

const deleteLocation = async (req, res, next) => {
  try {
    const location = await LocationModel.findByIdAndDelete(req.params.id);
    if (location) {
      res.status(200).json({ message: "Location deleted !", location });
    } else {
      res.status(404).json({ error: "Location Not found !", location });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.stack });
  }
};

export default deleteLocation;
