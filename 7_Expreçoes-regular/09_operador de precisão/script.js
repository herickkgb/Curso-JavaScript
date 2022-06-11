// inserur o numero de ocorrenca entre{}

let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"))
console.log(telefone.test("99999-8080"))
console.log("------")
console.log(telefone.test("999-999"))
console.log(telefone.test("9999-9"))

let cep = /\d{2}.\d{3}-\d{3}/
console.log("---CEP---")
console.log(cep.test("33.130-320"))
console.log(cep.test("33.1030-320"))