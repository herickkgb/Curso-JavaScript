function retornarNumeroPar(n) {
  if (n % 2 == 0) {
    console.log("n e agora e par: " + n);
  } else {
    console.log(n);
    retornarNumeroPar(n - 1);
  }
}
retornarNumeroPar(33)