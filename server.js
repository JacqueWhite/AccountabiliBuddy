"use strict";
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
app.use(express.static(__dirname + "/app/public"));

app.use(bodyParser.text());
app.use(bodyParser.json({ 
	type: "application/vnd.api+json" 
}));

// the main client pages
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

//get requests
app.use('/', htmlRoutes.home);
app.use('/', htmlRoutes.survey);

// get/post requests
app.use('/', apiRoutes.getFriends);
app.use('/', apiRoutes.postFriends);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("server listening on %d", PORT);
});