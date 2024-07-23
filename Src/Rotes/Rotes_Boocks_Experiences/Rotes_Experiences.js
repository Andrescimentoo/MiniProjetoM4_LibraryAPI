import { Router } from "express";
import { AllBoocksExperiences } from "../../Controlers/Controller_Boocks_Experiences/Controler_Experiences.js";

const FromBoocksExperiences = Router()
FromBoocksExperiences.get("/RoteNumberThree",AllBoocksExperiences)

export{FromBoocksExperiences}