import { dataCodes } from "../../models/model.js";
import library from "../../../Library.js";
import dataMock from "../../mock/mock.js";

jest.mock('../../models/model.js')

describe("testando controller post de BooksCode",() => {
  it("criar um comentario sobre os livros" , async ()=>{
       const mockOfTest = dataMock // aqui seria a criaçao da mockagem dos dados para operar o test)
       await dataCodes.create.mockResolvedValue(mockOfTest)
       const response = await request(library).post("/routePostCodes")
       expect(response.status).toBe(200)
       expect(response.body).toEqual(mockOfTest)
   })
 })

 describe()


