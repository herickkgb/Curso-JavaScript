// faz com que o antes do  ? seja opcional
let opcional = /prova\s?\d?/


console.log(opcional.test("prova"))
console.log(opcional.test("prova 1"))
console.log(opcional.test("prova 2"))

let padrao = /abacax?i/
console.log("----")

console.log(padrao.test("abacaxi"))
console.log(padrao.test("abacai"))