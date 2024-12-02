import { dataCodes } from "../../models/model.js";

const postCodes = async (req,res) => {
    try {
       const createBooksCodes = await dataCodes.create(req.body)
       res.status(201).send(createBooksCodes)
   
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao criar novo dado")
    }
}
export default postCodes