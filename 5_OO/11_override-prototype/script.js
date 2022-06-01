class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

Cachorro.prototype.raca = "SRD" // subtituir

let labrador = new Cachorro('Labrador', 4, 'preto');
console.log(labrador);

console.log(Cachorro.prototype.raca) //prototype

console.log(labrador.raca) // raca padrão dfinida