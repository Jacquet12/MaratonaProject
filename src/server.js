const express = require("express")
const server = express()
const routes = require("./routes")

//habilitar arquivos estaticos
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(3000, ()=> console.log('Rodando'))