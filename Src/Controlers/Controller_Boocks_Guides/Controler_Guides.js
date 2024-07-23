import { AllGuide } from "../../Data_Bases/Data_base_Guides/Boocks_Guides_Data_base.js";

export const GetAllGuides = (req,res)=>{
res.status(200).send(AllGuide)
}