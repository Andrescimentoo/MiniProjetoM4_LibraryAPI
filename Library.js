import express from "express"
import { routeBooksCodes} from "./Src/routes/rotesBooksCodes/rotesBooksCode.js"
import { routeBooksExperiences} from "./Src/routes/rotesBooksExperiences/rotesBooksExperiences.js"
import {routeBooksGuides} from "./Src/routes/rotesBooksGuides/rotesBooksGuides.js"

import cors from "cors"

const library = express()

library.use(cors({origin: 'http://localhost:5173'}))
library.use(express.json())
library.use(routeBooksCodes, routeBooksExperiences, routeBooksGuides)


const PORT = 5000 


try {
    library.listen(PORT, () => {
        console.log(`Aplicação está rodando em: https://localhost:${PORT}!`);
    });
} catch (error) {
    console.log('Erro ao rodar aplicação!', error);
}

export default library