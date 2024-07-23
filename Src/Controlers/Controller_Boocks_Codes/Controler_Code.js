import { Codes } from "../../Data_Bases/Data_Base_Codes/Boocks_Code_Data_base.js";

export const AllBoocksCodes = (req,res)=>{
res.status (200).send(Codes)
}