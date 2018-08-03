// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes')
var apiRoutes = require('./app/routing/apiRoutes')

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    // console.log(__dirname);
    // console.log(path.join(__dirname, "/public/home.html"));
  });
