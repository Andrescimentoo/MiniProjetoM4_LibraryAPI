import { dataCodes } from "../../models/model.js";

const deleteCodes = async (req,res) => {
    try {
        const getId = await dataCodes.findByPk(req.params.id) 
        const destroyBooksCodes = getId.destroy()

        res.status(200).send(destroyBooksCodes)
    } catch (error) {
        res.status(500).send(error) 
        console.log("erro ao deletar dado")
    }
} 

export default deleteCodes