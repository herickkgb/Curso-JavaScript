function nomeComIdade(nome, idade) {
  if (idade === undefined) {
    console.log("seu nome e " + nome);
  } else {
    console.log(`seu nome e ${nome} e voce tem ${idade} anos`);
  }
}

nomeComIdade("joão");
nomeComIdade("joão", 42);

// se voçe não declarar um func~çao vc pode usar o if para ir para outros lados

function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log(`esta função precisa dos 2 parametros para funcionar`);
  } else {
    return a + b;
  }
}

console.log(soma(12));
console.log(soma(20, 14));
