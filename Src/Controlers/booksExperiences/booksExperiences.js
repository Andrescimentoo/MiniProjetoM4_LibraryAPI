import { Experiences } from "../../Data_Bases/Data_Base_Experiences/Boocks_Experiences_Data_base.js";

export const AllBoocksExperiences = (req,res)=>{
    res.status(200).send(Experiences)
}