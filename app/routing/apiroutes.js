// Dependencies
var express = require("express");
var path = require("path");
var people = require('../data/friends.js');

// Express setup
var router = express.Router();

// api/friends route
router.get("/api/friends", function (req, res) {
  console.log('GET /api/friends called');
  console.log('GET /api/friends returning: ' + people);
  return res.json(people);
});

// Post route api/friends
router.post("/api/friends", function (req, res) {
  console.log('POST /api/friends called');
  people.push(req.body);

  
  // NEED Compatibility logic


  console.log('POST /api/friends returning: ' + res);
  return res;
});

module.exports = router;
