// primeira mneira

let parOuImpar = (n) => {
  return n * 2;
};

console.log(parOuImpar(3));

// segunda maneira mais simples pode se usada em uma unica linha "SIMPLES"
let paarOuImpar2 = (n) => n * 2;
console.log(paarOuImpar2(236));

//treinar abaixo
let nomeExibir = (nome) => {
  if (nome == "herick") {
    console.log(`seu nome é: ${nome}`);
  }
};
nomeExibir("herick");

let cnh = (idade, CNH) => {
  if (idade >= 18 && CNH == true) {
    console.log(`vc passou`);
  } else {
    console.log("não passou");
  }
};

cnh(19, true);

let calc = (num1) => num1 ** 2;
console.log(calc(10));
