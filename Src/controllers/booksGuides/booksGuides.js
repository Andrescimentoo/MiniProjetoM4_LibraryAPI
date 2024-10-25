import { dataGuides } from "../../models/model.js" 

 const booksGuides = (req,res)=>{
    try{
        res.status(200).send(dataGuides)
    }catch(error){
        res.status(500).send(error)
        console.log("erro ao enviar os dados!") 
      }

}
export default booksGuides