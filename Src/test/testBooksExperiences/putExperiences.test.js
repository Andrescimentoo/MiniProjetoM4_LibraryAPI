import library from "../../../Library"
import dataMock from "../../mock/mock"
import { dataExperiences } from "../../models/model"

jest.mock('../../models/model')
describe('testando controler putExperiences',() => {
    it('atualizando dado', async () => {
        const mock = dataMock
        await dataExperiences.update.mockResolvedValue(mock)
        const response = await request(library).put("/routePutExperiences")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mock)
    })
})
