// Routes
// =============================================================
var path = require('path');
console.log(path);

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    app.post('/', function(req, res) {
        console.log(req.body)
    });
    // default to survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    app.post('/survey', function(req, res) {
        console.log(req.body)
    });
}