// metodos interage com outras partes do codigo

let cachorro = {
  raca: "srd",
  latir: function () {
    console.log("AU au");
  },
  morde: function () {
    console.log("morder");
  },
  uivar: function () {
    console.log("Auuuuuuuuu");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return "A Raça é " + this.raca;
  },
};

console.log(cachorro.raca);

cachorro.setRaca("pastor alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());
