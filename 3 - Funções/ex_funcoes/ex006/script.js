function TipoDaFuncao(dado) {
  if (typeof dado === "number") {
    console.log(`este tipo "${dado}" é: number`);
  } else if (typeof dado === "string") {
    console.log(`este tipo "${dado}" é: string`);
  } else if (typeof dado === "boolean") {
    console.log(`este tipo "${dado}" é: bolean`);
  }
}
console.log(TipoDaFuncao(true));
console.log(TipoDaFuncao(232));
console.log(TipoDaFuncao("herick"));
