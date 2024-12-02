import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataGuides } from "../../models/model"

 
 jest.mock("../../models/model") 
 describe("testando controller updateGuides", () => {
    it("atualizar dado", async () => {
        const mock = dataMock
        await dataGuides.update.mockResolvedValue(mock)
        const response = await request(library).put("/routePutGuides")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock) 
    })
 })