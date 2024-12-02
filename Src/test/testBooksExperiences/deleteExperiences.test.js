import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataExperiences } from "../../models/model"

jest.mock("../../models/model")
describe("teste em controller deleteExperiences",() => {
    it("deletar dados de experences", async () => {
        const mock = dataMock
        await dataExperiences.destroy.mockResolvedValue(mock)
        const response = request(library).delete("/routeDeleteExperiences")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    })
})