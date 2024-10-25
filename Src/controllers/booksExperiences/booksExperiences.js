import { dataExperiences } from "../../models/model.js";

const booksExperiences = (req,res)=> {
    try{
        res.status(200).send(dataExperiences)
    }catch(error){
        res.status(500).send(error)
    }
}

export default booksExperiences