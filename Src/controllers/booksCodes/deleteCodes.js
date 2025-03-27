import { books_code } from "../../models/model.js"

const deleteCodes = async (req,res) => {
    try {
        const getId = await books_code.findByPk(req.params.id) 
        const destroyBooksCodes = getId.destroy()

        res.status(200).send(destroyBooksCodes)
    } catch (error) {
        res.status(500).send(`erro ao deletar dado", error.message ${error.message}`) 
        console.log(error.message)
    }
} 

export default deleteCodes