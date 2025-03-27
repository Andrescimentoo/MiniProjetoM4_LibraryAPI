import { books_code } from "../../models/model.js"

const allBooksCodes = async (req,res) => {
    try{
        const findAllcodes = await books_code.findAll() //await = espera!...e dps executa
        res.status(200).send(findAllcodes)
    }catch (error) {
        res.status(500).send(error)
        console.log("erro ao consultar os dados!")
    }
}
export {allBooksCodes}






//async eh so pra vc declarar que aquela funcao vai ser assincrona
//o pulo do gato esta em olhar o await, entao estamos falando ali em cima:
// *espera a consulta ao banco de dados ser feita... e dps executa datacodes.findAll() 