import { books_experiences } from "../../models/model.js"
const booksExperiences = async (req,res)=> {
   try{
        const findAllBooks = await books_experiences.findAll()
         res.status(200).send(findAllBooks)
   }catch(error){
        res.status(500).send(error)
        console.log("erro ao consultar dados")
    }
}

export default booksExperiences
// essa forma de codigo ela funciona com sistema de dados Mockados, agora trabalhando com dadxos reais a 
//montagem de estrutura eh outra  