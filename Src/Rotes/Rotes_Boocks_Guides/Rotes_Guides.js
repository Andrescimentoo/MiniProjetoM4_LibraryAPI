import { Router } from "express";
import { GetAllGuides } from "../../Controlers/Controller_Boocks_Guides/Controler_Guides.js";

const RoteBoocksG = Router()

RoteBoocksG.get("/RoteNumberOne",GetAllGuides)

export {RoteBoocksG}