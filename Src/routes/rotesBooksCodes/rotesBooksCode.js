import { Router } from "express";
import AllBoocksCodes from "../../controllers/booksCodes/booksCode.js";

const routeBooksCodes = Router()

routeBooksCodes.get("/RoteNumberTwo",AllBoocksCodes)

export {routeBooksCodes}