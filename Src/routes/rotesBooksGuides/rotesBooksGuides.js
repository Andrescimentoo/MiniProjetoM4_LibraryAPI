import { Router } from "express";
import booksGuides from "../../controllers/booksGuides/getBooksGuides.js";
import postExperiences from "../../controllers/booksExperiences/postExperiences.js";
import putGuides from "../../controllers/booksGuides/putGuides.js";
import deleteGuides from "../../controllers/booksGuides/deleteGuides.js";

const routeBooksGuides = Router()

routeBooksGuides.get("/routeGetGuides",booksGuides)  
routeBooksGuides.post("routePostGuides",postExperiences)
routeBooksGuides.put("/routePutGuides",putGuides)
routeBooksGuides.delete("/routeDeleteGuides",deleteGuides)  

export {routeBooksGuides}               