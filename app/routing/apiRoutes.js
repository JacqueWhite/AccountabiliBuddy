var friends = require('../data/friends.js');
// console.log(friends);
var path = require('path');
// console.log(path);

// routing 
module.exports = function(app) {
    // API GET Requests 
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
}

