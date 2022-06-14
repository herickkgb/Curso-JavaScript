let p1 = new Promise(function(resolve, rejec) {
    setTimeout(function() {
        resolve(100)
    }, 5000)
})

let p2 = Promise.resolve(5)

let p3 = new Promise(function(resolve, reject) {
    resolve(10)
})
Promise.all([p1, p2, p3]).then((values) => console.log(values))