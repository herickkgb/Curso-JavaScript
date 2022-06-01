let cachorro = {
    patas: 4,
    tamanho: "1.75cm",
    raca: "SRD",
    Latir: function() {
        console.log("Au,Au")
    }
}
let labrador = Object.create(cachorro)

let pincher = Object.create(cachorro)

labrador.Latir()
console.log(pincher.patas)
console.log(pincher.tamanho)
console.log(labrador.tamanho)
let pastor = Object.create(cachorro)
pastor.raca = "alemão"
console.log(pastor.raca)