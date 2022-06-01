let cachorro = {
  latir: function () {
    console.log("AU au");
  },
  morde: function () {
    console.log("morder");
  },
  uivar: function () {
    console.log("Auuuuuuuuu");
    return;
  },
};
cachorro.latir();
cachorro.morde();
console.log(cachorro.uivar());
