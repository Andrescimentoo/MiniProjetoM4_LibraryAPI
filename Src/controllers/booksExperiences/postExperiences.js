import { books_experiences } from "../../models/model.js";

const postExperiences = async (req,res) => {
   try {
    const createBooksExperiences = await books_experiences.create(req.body)
        res.status(201).send(createBooksExperiences)
   
    } catch (error) {
    res.status(500).send(error)
    console.log("erro ao criar dado")
   }
}
export default postExperiences
