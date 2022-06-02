console.log(/[123]/.test("existe 123 aqui?"));
console.log(/[0-100]/.test("o numero 88 esta aqui?"));

let reg2 = /[0-9]/
console.log(reg2.test("existe 3 aqui?"));