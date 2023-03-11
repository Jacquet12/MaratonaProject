const express = require('express')
const routes = express.Router()

const basePath = __dirname + "/views"

//request response
routes.get('/', (req, response) => {
    return response.sendFile(basePath + "/views/index.html")
} )

routes.get('/index.html', (req, res) => {
    return res.redirect('/')} )

module.exports = routes