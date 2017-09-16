// See all Friends - provides JSON
app.get("/api/friends", function(req, res) {
        return res.json(friends);
  }

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});