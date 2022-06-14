let promisseErrada = Promise.resolve(new Error("Algo deu errado"))

promisseErrada
promisseErrada.then(value => console.log(value))
    .catch(reason => console.log("erro: " + reason))