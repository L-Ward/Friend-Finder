// api/friends route
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// Post route api/friends
app.post("/api/friends", function(req, res) {
   // NEED Compatibility logic
  });