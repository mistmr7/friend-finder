// require the friends array of objects

let friends = require('../data/friends')

// Call app
module.exports = function(app){

    // Get the JSON object of api friends
    app.get('/api/friends', function(req, res){
        return res.json(friends)
    })

    // Post to the api friends
    app.post('/api/friends', function(req, res){

        // results from survey
        let newFriend = req.body

        // new array for potential matches
        let matches = []

        // Math to try to determine the best match for the survey taker
        for (i=0; i < friends.length; i++) {

            matches.push((Math.abs(newFriend.scores[0] - friends[i].scores[0])) + (Math.abs(newFriend.scores[1] - friends[i].scores[1])) + (Math.abs(newFriend.scores[2] - friends[i].scores[2])) + (Math.abs(newFriend.scores[3] - friends[i].scores[3])) + (Math.abs(newFriend.scores[4] - friends[i].scores[4])) + (Math.abs(newFriend.scores[5] - friends[i].scores[5])) + (Math.abs(newFriend.scores[6] - friends[i].scores[6])) + (Math.abs(newFriend.scores[7] - friends[i].scores[7])) + (Math.abs(newFriend.scores[8] - friends[i].scores[8])) + (Math.abs(newFriend.scores[9] - friends[i].scores[9])))
            
        }

        // function to find the lowest difference between matches
        function lowestNumber () {
            return Math.min.apply(null, matches)
        }

        // Assign the index of the friend that matches
        let data = friends[matches.findIndex(match => match === lowestNumber(matches))]

        // Push new survey taker to the 
        friends.push(newFriend)

        // Response pushed to html file
        res.json(data)    
    })
}