const umOuMaisDigitos = /\d+/ // aceita so digitos n letras
console.log(umOuMaisDigitos.test("1523"))
console.log(umOuMaisDigitos.test("1"))
console.log(umOuMaisDigitos.test(1))
console.log(umOuMaisDigitos.test("1233451326851550351"))
console.log("-------------")
console.log(umOuMaisDigitos.test(""))
console.log(umOuMaisDigitos.test("asdasdasd"))