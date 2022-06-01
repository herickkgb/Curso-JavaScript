// && == and, paras er true, os dois 'lados' da comparação tem precisam ser true

// || == or, para ser tru, basta um dos lados for Tru

// ! not, inverte os valores (true vira false)

console.log(true && true); //true
console.log(true && false); //true
console.log(false || false); //false
console.log(!true); //false

//  or retorna false se os 2 for false
console.log("matheus" == "herick" && false);
console.log(5 + 2 + 3 == 10 && 8 <= 6);

//  and retorna true se os 2 for true
console.log(5 > 3 || 3 == 1);

// ! inverte os valores obtidos
console.log(!(true && true));
console.log(!(false && false));
