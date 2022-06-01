// synbol n pode ser alteradas e nem criadas 2 vezes

class Cachorro {
    constructor(raca) {
        this.raca = raca
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Golden Retriever');
console.log(golden.patas)