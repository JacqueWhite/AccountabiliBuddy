var friends = require('../data/friends.js');
// console.log(dogs);
var path = require('path');
// console.log(path);

// routing 
module.exports = function(app) {
    // API GET Requests 
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
}

  // API Requests AJAX response
    app.post('/api/friends', function(req, res) {
        console.log('req.body.name: ' + req.body.name);
        console.log('req.body.scores.length: ' + req.body.scores.length);

        var results = {};
        var diffConfig = 100;
        // loop through the object
        for (var i = 0; i < friends.length; i++) {
            var diffArray = [];
            var totalDiff = 0;
            // loops through the score
            // math.abs not return a neg number 
            for (var j = 0; j < friends[i].scores.length; j++) {
                diffArray.push(Math.abs(req.body.scores[j] - friends[i].scores[j]))
            };
            console.log('diffArray: ' + diffArray);
            for (var k = 0; k < diffArray.length; k++) {
                totalDiff += diffArray[k];
            }
            // grabs results from users choices
            console.log('totalDiff: ' + totalDiff);
            if (results == {}) {
                results = friends[i];
                diffConfig = totalDiff;
            } else if (totalDiff < diffConfig) {
                results = friends[i];
                diffConfig = totalDiff;
            }
            console.log(diffConfig);
        }
        // gives out results
        console.log("Your results is: " + results.name)
        friends.push(req.body);
        res.json(results);
    });
};

