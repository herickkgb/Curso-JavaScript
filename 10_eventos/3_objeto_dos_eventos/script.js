let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

function msg(e) {
    console.log("clicou no b utton")
    e.stopPropagation()
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(event) {
    console.log(event)
})

p.addEventListener("click", function() {
    console.log("clicou no paragrafo")
})

a.addEventListener("click", function(e) {
    console.log("ok")

})