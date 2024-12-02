import { dataCodes } from "../../models/model.js";
import library from "../../../Library.js";
import dataMock from "../../mock/mock";


jest.mock("../../models/model.js")

describe("testando controller Put")
it("atualizar um dado", async () => {
    const mock = dataMock
       dataCodes.update.mockResolvedValue(mock)
       const response = await request(library).put("/routePutCodes")
       expect(response.status).toBe(200)
       expect(response.body).toEqual(mock)

})