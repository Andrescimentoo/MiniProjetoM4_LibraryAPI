import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataGuides } from "../../models/model"

jest.mock ("../../models/model")
describe("teste controller guides",() => {
    it("enviar todos os dados de books guides", async () => {
        const mock = dataMock
        await dataGuides.findAll.mockResolvedValue(mock)
        const response = request(library).get("/routeGetGuides")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    } )
} )  