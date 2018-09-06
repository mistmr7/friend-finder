let friends = require('../data/friends')
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        console.log(friends)
        return res.json(friends)
    })

    app.post('/api/friends', function(req, res){
        let newFriend = req.body

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase()

        console.log(newFriend)
        friends.push(newFriend)
        res.json(newFriend)
    })
}