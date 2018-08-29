// Dependencies
let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')

// Set up express
var app = express();
var PORT = process.env.PORT || 3000

// Use express
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})

module.exports = {
    app: app,
    express: express,
    path: path,
    PORT: PORT,
    bodyParser: bodyParser
}

