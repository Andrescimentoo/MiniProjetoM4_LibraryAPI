import { Router } from "express";
import  AllBoocksCodes from "../../Controlers/Controller_Boocks_Codes/Controler_Code.js";

const FromBoocksCodes  =  Router()

FromBoocksCodes.get("/RoteNumberTwo",AllBoocksCodes)

export {FromBoocksCodes}