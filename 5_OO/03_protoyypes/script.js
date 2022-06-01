let pessoa = {
    maos: 2
}
console.log(Object.getPrototypeOf(pessoa));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
// todo objeto qu for creado vai ter prototype