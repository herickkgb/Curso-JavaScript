function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b)
        }, 4000)
    })
}

async function resSoma(a, b, c) {

    let x = somaComDelay(a, b)
    let y = c
    return x + y

}


console.log(resSoma(1, 2, 3).then(console.log(resSoma)))