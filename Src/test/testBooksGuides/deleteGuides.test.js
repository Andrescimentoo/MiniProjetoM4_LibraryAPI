import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataGuides } from "../../models/model"

jest.mock("../../models/model") 
describe("testando controller deleteGuides", () => {
    it("deletar dados de books guides", async () => {
        const mock = dataMock
        await dataGuides.destroy.mockResolvedValue(mock)
        const response = request(library).delete("/routeDeleteGuides") 
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    }) 
})