class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log('AU, au')
    }
}

Cachorro.prototype.patas = 4;


let labrador = new Cachorro('Labrador', 4, 'preto');

console.log(labrador.patas) //patss
labrador.latir()