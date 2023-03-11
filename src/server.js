const express = require("express")
const server = express()

//habilitar arquivos estaticos
server.use(express.static("public"))

//request response
server.get('/', (req, response) => {
    return response.send('OIE!!!')
} )

server.listen(3000, ()=> console.log('Rodando'))