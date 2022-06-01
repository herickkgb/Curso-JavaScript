// declarando o valor no incio n precisa do usoario colocar um valor ele assumo o valor ja colocado

function repetirFrase(frases, n = 2) {
  for (let x = 1; x <= n; x++) {
    console.log(frases + "" + x);
  }
}

repetirFrase("testando", 5);
repetirFrase("so duas vezes");
////

function potencia(base, exp = 2) {
  return base ** exp;
}

console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));
