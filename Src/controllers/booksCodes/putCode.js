import { books_code} from "../../models/model.js";

const putCode = async (req,res) => {
    try {
        const getId = await books_code.findByPk(req.params.id)
        const updateCodes =  await getId.update(req.body)

        res.status(200).send(updateCodes)
    } catch (error) {
        res.status(500).send(`erro ao atualizar dado,${message.error}`)
        console.log(message.error)
    }
}
export default putCode   