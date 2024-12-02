import { dataGuides } from "../../models/model.js";

const postGuides = async (req, res) => {
    try {
        const createBoksGuides = await dataGuides.create(req.body);
        res.status(201).send(createBoksGuides); 
    } catch (error) {
        res.status(500).send(error);
        console.log("erro ao criar dado")
    }
};

export default postGuides;