import LocationModel from "../../models/location/locationModel.js";

const getOneLocation = async (req, res, next) => {
  try {
    const location = await LocationModel.findById(req.params.id);
    if (location) {
      res.status(200).json({ message: "Success!", location });
    } else {
      res
        .status(404)
        .json({ error: `No Location with ${req.params.id} found !`, location });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.stack });
  }
};

export default getOneLocation;
