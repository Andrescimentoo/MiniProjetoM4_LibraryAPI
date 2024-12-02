import { Router } from "express";
import booksExperiences from "../../controllers/booksExperiences/getBooksExperiences.js";
import postExperiences from "../../controllers/booksExperiences/postExperiences.js";
import putExperiences from "../../controllers/booksExperiences/putExperiences.js";
import deleteExperiences from "../../controllers/booksExperiences/deleteExperiences.js";

const routeBooksExperiences = Router()

routeBooksExperiences.get("/routeExperiences", booksExperiences)
routeBooksExperiences.post("/routePostExperiences", postExperiences)
routeBooksExperiences.put("/routePutExperiences", putExperiences)
routeBooksExperiences.delete("/routeDeleteExperiences", deleteExperiences)

export{routeBooksExperiences}
