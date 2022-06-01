// classse e um molde que estrutura objetos

let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("AU AU")
    }
}
let side = Object.create(cachorro);
side.latir()