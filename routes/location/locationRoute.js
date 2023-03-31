import { Router } from "express";
import addLocation from "../../controllers/location/addLocation.js";
import deleteLocation from "../../controllers/location/deleteLocation.js";
import getLocations from "../../controllers/location/getLocations.js";
import updateLocation from "../../controllers/location/updateLocation.js";

const locationRoute = Router();

locationRoute.post("/add", addLocation);
locationRoute.post("/update/:id", updateLocation);
locationRoute.delete("/delete/:id", deleteLocation);
locationRoute.get("/", getLocations);

export default locationRoute;
