import { dataCodes } from "../../models/model.js";

const putCode = async (req,res) => {
    try {
        const getId = await dataCodes.findByPk(req.params.id)
        const updateCodes =  await getId.update(req.body)

        res.status(200).send(updateCodes)
    } catch (error) {
        res.status(500).send(error)
        console.log("erro ao atualizar dado")
    }
}
export default putCode   