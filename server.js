// Dependencies
let bodyParser = require('body-parser')
let express = require('express')

// Set up express
var app = express();
var PORT = process.env.PORT || 3000

// Use express
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// call app in htmlRoutes and apiRoutes
require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

// use the folders public and data
app.use(express.static('public'))
app.use(express.static('data'))

// Make sure server is listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})





