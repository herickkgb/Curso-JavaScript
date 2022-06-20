let express = require("express")

let app = express();


app.get("/", function(req, res) {
    res.send("Prmeira rota com express")
})


app.listen(3000, function() {
    console.log("a aplicação esta na porta 3000")
})