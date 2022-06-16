let input = document.querySelector("input")
input.addEventListener("focus", function() {
    console.log("focu no input")
})


input.addEventListener('blur', function() {
    console.log("saiu do input")
})