import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataExperiences } from "../../models/model"

jest.mock('../../models/model')

describe("testando controller")  
it('atualizar dado', async () => {
    const mock = dataMock
     await dataExperiences.create.mockResolvedValue(mock)
    const response = await request(library).put("url")
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mock)
})
