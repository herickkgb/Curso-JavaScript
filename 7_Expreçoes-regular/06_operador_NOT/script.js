const notab = /[^ab]/ // nao aceita separados so juntos
console.log(notab.test("a"))
console.log(notab.test("aqui tem a"))

const notaz = /[^a-z]/ //aceita tudo juntos e separados mas n numeros
console.log(notaz.test("123 sa")) //so aceita acracteres
console.log(notaz.test("asffasdfsfsafassasd"))



const az = /[a-z]/
console.log(az.test("afafdad233dafasf"))
console.log(az.test(3))