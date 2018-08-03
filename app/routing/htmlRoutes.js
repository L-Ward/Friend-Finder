// Route to survey html
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });

// Catch all route to home html
app.get("*", function(req, res) {
  console.log(__dirname);
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });