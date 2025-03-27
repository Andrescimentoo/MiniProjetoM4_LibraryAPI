import { books_experiences} from "../../models/model.js";

const putExperiences = async (req,res) => {
    try {
        const getId = await books_experiences.findByPk(req.params.id)
        const updateExperiences = await getId.destroi(req.body)
       
        res.status(200).send(updateExperiences)
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao deletar dado")
     }
}
export default putExperiences