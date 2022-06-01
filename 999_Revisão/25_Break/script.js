let nome = "herick";
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    nome = "joãao";
  }
  if (i == 5 && nome == "joãao") {
    console.log(`O nome e ${nome}, pode paraar`);
    break;
  }
  console.log(i);
}
