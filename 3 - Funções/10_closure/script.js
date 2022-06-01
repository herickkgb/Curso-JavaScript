function aarmazenarSoma(x) {
  return (y) => x + y;
}
let soma1 = aarmazenarSoma(3);
console.log(soma1(5));
let soma2 = aarmazenarSoma(5);
console.log(soma2(10));
