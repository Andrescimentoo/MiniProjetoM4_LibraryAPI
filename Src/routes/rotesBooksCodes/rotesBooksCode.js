import { Router } from "express";
import AllBoocksCodes from "../../controllers/booksCodes/booksCode.js";

const routeBooksCodes = Router()

routeBooksCodes.get("/routesCodes",AllBoocksCodes)

export {routeBooksCodes}