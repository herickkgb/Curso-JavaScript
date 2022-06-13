let frutas = /\d+ (bananas|macãs|laranjas)/;

console.log(frutas.test("10 bananas"))
console.log(frutas.test("10 macãs"))
console.log(frutas.test("10 melancias"))