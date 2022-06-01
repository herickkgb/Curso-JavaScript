function verificadorTexto(texto) {
  if (texto.length >= 10) {
    console.log("Texto muito longo");
  } else if (texto.length <= 9) {
    console.log("dentro dos paramentros");
  }
}

console.log(verificadorTexto("jkuiopkmhs"));
console.log(verificadorTexto("jkuiopkhs"));
