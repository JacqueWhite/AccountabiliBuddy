// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true 
}));

// parse everything we need for the html
app.use(express.static("app/public"));

app.use(bodyParser.text());
app.use(bodyParser.json({ 
	type: "application/vnd.api.json" 
}));

// the main client pages
require("app/routing/htmlRoutes.js")(app);
require("app/routing/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("server listening on %d", PORT);
});