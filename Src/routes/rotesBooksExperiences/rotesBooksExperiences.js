import { Router } from "express";
import booksExperiences from "../../controllers/booksExperiences/booksExperiences.js";

const routeBooksExperiences = Router()

routeBooksExperiences.get("/routeExperiences",booksExperiences)

export{routeBooksExperiences}
