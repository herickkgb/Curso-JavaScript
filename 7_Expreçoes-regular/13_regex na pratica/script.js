//validando Email

let validandoDominio = /www. \w+\.com.br|.com/;

console.log(validandoDominio.test("www.google.com"))
console.log(validandoDominio.test("www.google.com.br"))
console.log(validandoDominio.test("www.google.gov.br"))



// valiando email
let validadndoEmail = /\w+@\w+\.\w+/

console.log("#######")
console.log(validadndoEmail.test("teste@email.com"))
console.log(validadndoEmail.test("email@email"))
console.log(validadndoEmail.test("ronaldo@yahoo.com.br"))
console.log(validadndoEmail.test("email.com"))
console.log("#######")

// validando nascimento

let dataNacimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log(dataNacimento.test("12/07/2021"))
console.log(dataNacimento.test("30/11/1994"))
console.log(dataNacimento.test("30/11/94"))
console.log(dataNacimento.test("12/7/21"))