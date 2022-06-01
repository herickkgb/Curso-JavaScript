function Cachorro(raca) {
    this.raca = raca;
}

Cachorro.prototype.uivar = function() {
    console.log('Auuuuuuuuuu')
};

let pug = new Cachorro('pug');
console.log(pug.raca)
pug.uivar()
pug.uivar()