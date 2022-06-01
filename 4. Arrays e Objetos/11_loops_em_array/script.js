let nomes = ["herick", "joão", "pedro", "carlos"];

for (let i = 0; i <= nomes.length; i++) {
  console.log(`meu i:= ${nomes[i]}`);
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let a = 0; a <= num.length; a++) {
  console.log(num[a]);
}

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = 0;
while (b <= num2.length) {
  console.log(num2[b]);
  b++;
}

do {
  console.log(num2[b]);
  b++;
} while (b <= num2.length);
