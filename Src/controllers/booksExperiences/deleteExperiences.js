import { books_experiences} from "../../models/model.js";

const deleteExperiences = async (req,res) => {
    try {
        const getId = await books_experiences.findByPk(req.params.id)
        const destroyBooksExperinces = await getId.destroy()
        
         res.status(200).send(destroyBooksExperinces)
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao deltar dado")
    }
}

export default deleteExperiences