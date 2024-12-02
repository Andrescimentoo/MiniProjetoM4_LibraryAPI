import { dataGuides } from "../../models/model.js" 

 const booksGuides = async(req,res)=>{
    try{
        const findAllGuides = await dataGuides.findAll()
        res.status(200).send(findAllGuides)
    }catch(error){
        res.status(500).send(error)
        console.log("erro ao enviar os dados!") 
      }

}
export default booksGuides