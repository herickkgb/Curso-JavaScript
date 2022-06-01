let pessoa = {
    maos: 2
}
let pessoaNova = Object.create(pessoa)
console.log(pessoaNova.maos)
console.log(Object.getPrototypeOf)