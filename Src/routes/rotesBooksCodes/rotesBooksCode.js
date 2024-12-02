import { Router } from "express";
import allBooksCodes from "../../controllers/booksCodes/getBooksCode.js";
import postCodes from "../../controllers/booksCodes/postCodes.js";

const routeBooksCodes = Router()


routeBooksCodes.get("/routesCodes",allBooksCodes)
routeBooksCodes.post("/routePostCodes",postCodes)
routeBooksCodes.put("/routePutCodes")
routeBooksCodes.delete("/routeDeleteCodes")

export {routeBooksCodes}