import { books_guides} from "../../models/model.js";

const deleteGuides = async (req,res) => {
    try {
        const getId = await books_guides.findByPk(req.params.id)
        const destroyBooksGuides = getId.destroy()
        
        res.status(200).send(destroyBooksGuides)
   } catch (error) {
        res.status(500).send(error)
        console.log("erro ao deletar dado")
    }
}

export default deleteGuides



