import { Router } from "express";
import addLocation from "../../controllers/location/addLocation.js";

const locationRoute = Router()

locationRoute.post("/add", addLocation )

export default locationRoute