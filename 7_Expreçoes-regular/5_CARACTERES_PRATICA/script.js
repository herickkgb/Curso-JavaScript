let ano = /\d\d\d\d/;
console.log(ano.test("2019"))
console.log(ano.test("019"))
console.log(ano.test("01"))


let tresLetras = /\W\W\W/; // PALAVRAS 3 LETRAS PARA COMPARAR PRECISO USAR O .LEGTH
console.log(tresLetras.test("dia"))
console.log(tresLetras.test("anao"))
console.log(tresLetras.test("f"))