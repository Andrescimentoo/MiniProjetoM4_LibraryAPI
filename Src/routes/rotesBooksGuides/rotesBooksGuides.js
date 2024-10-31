import { Router } from "express";
import booksGuides from "../../controllers/booksGuides/booksGuides.js";

const roteBooksGuides = Router()

roteBooksGuides.get("/routesGuides",booksGuides)    

export {roteBooksGuides}               