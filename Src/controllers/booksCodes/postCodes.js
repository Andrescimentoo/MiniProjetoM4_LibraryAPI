import { books_code } from "../../models/model.js"


const postCodes = async (req,res) => {
    try {
       const createBooksCodes = await books_code.create(req.body)
       res.status(201).send(createBooksCodes)
   
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao criar novo dado",error)
    }
}
export default postCodes