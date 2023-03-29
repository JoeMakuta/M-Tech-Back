const addLocation = async (req, res, next) => {
  try {
    const validLocation = await validateLocation(req.body);
    if (!validLocation.error) {
      res.status(200).json({
        message: "No error in the location!",
      });
    } else {
      res.status(500).json({
        error: validLocation.error?.details[0].message,
      });
    }
  } catch (error) {}
};

export default addLocation;
