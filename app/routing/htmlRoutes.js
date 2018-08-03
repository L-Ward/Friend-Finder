// Dependencies
var express = require("express");
var path = require("path");

// Express setup
var router = express.Router();

  // Route to survey html
  router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Catch all route to home html
  router.get("*", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  module.exports = router;


