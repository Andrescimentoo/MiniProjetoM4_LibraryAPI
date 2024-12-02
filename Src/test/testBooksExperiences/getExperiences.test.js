import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataExperiences } from "../../models/model"

jest.mock("../../models/model")
describe("teste controller getExperiences",() => {
    it("enviar todos os dados" , async () => {
        const mock = dataMock
        await dataExperiences.findAll.mockResolvedValue(mock)
        const response = await request(library).get("/routeExperiences")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    })
})  