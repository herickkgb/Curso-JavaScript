function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log("pro favor passe so numers para o programa")
    } else {
        return number;
    }
}
checarNumero(5)
checarNumero("jdhjnj")