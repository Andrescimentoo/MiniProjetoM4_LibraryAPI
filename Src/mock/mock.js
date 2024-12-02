class objectsMock {
    constructor(id,name,author,gener,target_audience){
        this.id=id,
        this.name=name,
        this.author=author,
        this.gener=gener,
        this.target_audience=target_audience
    }
}

const dataMock = [
    new objectsMock(1,"livro de Conceito","autor de conceito","genero de conceito","publico-Alvo de conceito")
]

export default dataMock