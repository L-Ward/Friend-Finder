// Route to survey html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
// Catch all route to home html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });