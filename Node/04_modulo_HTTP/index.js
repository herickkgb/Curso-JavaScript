let { createServer } = require("http");

let server = createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" })
    response.write("<h1> Hello Word </h1> <p> primeira pagina web com node.js </p>");
    response.end();
});

server.listen(8000)

console.log("listening! (port 8000")