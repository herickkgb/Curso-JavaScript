// window.addEventListener("load", function() {
//     alert("Assine nossos termos d uso")
// })


window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
})