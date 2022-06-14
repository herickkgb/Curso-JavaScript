let p = Promise.resolve(5)

console.log("algum valor")

console.log(p)

p.then((value) => { console.log(`o valor e ${value}`) });