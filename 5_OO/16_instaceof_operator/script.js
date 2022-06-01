class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }
}

console.log(new Cachorro instanceof Mamifero)

// verifica se eo pai do objeto se um objeto e estancia de outro
// podemos verificar quem eo pai do objeto utilizado o instance of