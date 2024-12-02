import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataGuides } from "../../models/model"

jest.mock("../../models/model")
describe("testando controller postGuides",() => {
    it("criar book Guide", async () => {
        const mock = dataMock
        await dataGuides.create.mockResolvedValue(mock)
        const response = await request(library).post("routePostGuides")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    })
    })  