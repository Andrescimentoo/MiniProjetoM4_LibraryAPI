import { books_guides} from "../../models/model.js";

const putGuides = async (req,res) => {
    try {
        const getId = await books_guides.findByPk(req.params.id) // tipo assim nesse banco de dados captura o id dps injeta nele o metodo update 
        const updateGuides = await getId.update(req.body)

        res.status(200).send(updateGuides)
    } catch (error) {
        res.status(500).send(error)
    }
}
export default putGuides
