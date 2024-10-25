import { datacodes } from "../../models/model.js"

const AllBoocksCodes = (res,req) => {
    try{
        res.status(200).send(datacodes)
    }catch (error) {
        res.status(500).send(error)
        console.log("erro ao enviar os dados!")
    }
}
export default AllBoocksCodes