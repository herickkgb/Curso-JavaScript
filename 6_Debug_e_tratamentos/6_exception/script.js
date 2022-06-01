function saudacao(nome) {
    if (typeof nome != "string") {
        throw new Error("o parametro nome presia ser string");
    } else {
        console.log(`olá ${nome}`)
    }
}

saudacao("matheis")
saudacao("5")

console.log("teste")