import { Router } from "express";
import addLocation from "../../controllers/location/addLocation.js";
import updateLocation from "../../controllers/location/updateLocation.js";

const locationRoute = Router();

locationRoute.post("/add", addLocation);
locationRoute.post("/update/:id", updateLocation);

export default locationRoute;
