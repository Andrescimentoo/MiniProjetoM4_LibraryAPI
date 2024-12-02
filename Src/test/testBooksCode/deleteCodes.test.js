import library from "../../../Library.js";
import { dataCodes } from "../../models/model.js";
import dataMock from "../../mock/mock.js";


jest.mock("../../models/model.js")

describe("teste em controller deleteCodes")
it("efetuar teste delete ", async () => {
    const mock = dataMock
      dataCodes.destroy.mockResolvedValue(mock) //mockResolvedValue() é como um tipo de send() nessa linha
    const response = await request(library).delete("/routeDeleteCodes")
    //codigo ja esta estruturado agora vamos fazer a montagem para possibilitar a vizualizaçao do test 
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mock)
})