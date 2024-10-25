import { Router } from "express";
import booksGuides from "../../controllers/booksGuides/booksGuides";

const roteBooksGuides = Router()

roteBooksGuides.get("/RoteNumberOne",booksGuides)

export {roteBooksGuides}               