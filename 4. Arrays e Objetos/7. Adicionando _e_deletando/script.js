let carro = {
  marca: "vw",
  portas: 4,
  eletrico: false,
  motor: 1.0,
};
console.log(carro.portas);

delete carro.portas; // deletando

console.log(carro.portas);

carro.tetoSolar = true; //adicioanndo

console.log(carro.tetoSolar);
console.log(carro);
