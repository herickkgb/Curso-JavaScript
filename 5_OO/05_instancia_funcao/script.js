function criarCachorro(raca, pata, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.pata = pata;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au,au");
    }
    return cachorro;
}

let doberman = criarCachorro("Doberman", 5, "amarela");
console.log(doberman)

doberman.latir();

let pincher = criarCachorro("pincher", 4, "preto")

console.log(pincher)