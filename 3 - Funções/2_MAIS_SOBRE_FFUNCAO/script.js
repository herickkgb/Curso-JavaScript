function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}
console.log(multiplicarTresNumeros(2, 3, 4));
const mult = multiplicarTresNumeros(5, 4, 8);
console.log(`o valor de mult é: ${mult}`);

function podeDirigir(idade,CNH){
  if(idade = 18 && CNH == true){
   console.log("pode dirigir")
} else {
  console.log("não pode dirigir")
}
}

console.log(podeDirigir(34,true));
console.log(podeDirigir(17,false));