import { Codes } from "../../Data_Bases/Data_Base_Codes/Boocks_Code_Data_base.js";

const AllBoocksCodes = (res,req) => {
    try{
        res.status(200).send(Codes)
    }catch (error) {
        res.status(500).send(error)
        console.log("erro ao enviar os dados!")
    }
}
export default AllBoocksCodes