import { AllGuide } from "../../Data_Bases/Data_base_Guides/Boocks_Guides_Data_base.js";

 const GetAllGuides = (req,res)=>{
    try{
        res.status(200).send(AllGuide)
    }catch(error){
        res.status(500).send(error)
        console.log("erro ao enviar os dados!") 
      }

}
export default GetAllGuides