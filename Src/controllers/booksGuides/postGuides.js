import { books_guides } from "../../models/model.js";

const postGuides = async (req, res) => {
    try {
        const createBoksGuides = await books_guides.create(req.body);
        res.status(201).send(createBoksGuides); 
    } catch (error) {
        res.status(500).send(error);
        console.log("erro ao criar dado")
    }
};

export default postGuides;