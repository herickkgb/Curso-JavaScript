function somar() {
  for (let impar = 1; impar <= 20; impar++) {
    if (impar % 2 == 1) {
      console.log(`numero atual é: ${impar}`);
    }
  }
}
somar();

console.log("==========SEPARAR==========");

function somarPar() {
  for (let par = 1; par <= 20; par++) {
    if (par % 2 == 0) {
      console.log(`numero atual é: ${par}`);
    }
  }
}
somarPar();
