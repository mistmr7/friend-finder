// Get dependencies
let path = require('path')

// Use app
module.exports = function(app){

    // redirect to the home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/home.html"));
    })

    // Redirect to the survey page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/survey.html'))
    })
    
}

