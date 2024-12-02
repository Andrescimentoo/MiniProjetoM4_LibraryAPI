import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataCodes } from "../../models/model"

jest.mock('../../models/model.js')

describe('testando controller get de BooksCode')
it('enviar todos os dados', async () => {
    const mock = dataMock
    await dataCodes.findAll.mockResolvedValue(mock)
    const response = await request(library).get("url")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mock)  
}) 