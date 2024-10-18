
import express from "express"
import { RoteBoocksG } from "./Src/Rotes/Rotes_Boocks_Guides/Rotes_Guides.js"
import { FromBoocksCodes } from "./Src/Rotes/Rotes_Boocks_Codes/Rotes_Code.js"
import { FromBoocksExperiences } from "./Src/Rotes/Rotes_Boocks_Experiences/Rotes_Experiences.js"
import cors from "cors"

const library = express()

library.use(cors({origin: 'http://localhost:5173'}))
library.use(express.json())

library.use(RoteBoocksG)
library.use(FromBoocksCodes)
library.use(FromBoocksExperiences)



const PORT = 5000



library.listen(PORT,()=>{
    console.log(`Aplicacao esta rodando em: http://localhost:${PORT}`)
})