let cachorro = {
    raca: "SRD",
    rosnar: function() {
        console.log("grrrrrr")
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return this.raca
    },
    andar: function() {
        console.log("andei")
    }
}
console.log(cachorro.raca)
cachorro.setRaca('Pastor Alemão')
console.log(cachorro.raca)