// Dependencies
var express = require("express");
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
  var newFriend = (req.body);
  var closestMatch;
  
  
  // NEED Compatibility logic
  var bestFriendScore = 50 //Should be higher than the highest possible comparison score
  
  people.forEach((index) => {
    var comparisonScore = 0;
    for (var i = 0; i < index.scores.length; i++) {
      comparisonScore += Math.abs(newFriend.scores[i] - index.scores[i]);  
    }
    if (comparisonScore < bestFriendScore) {
      closestMatch = index;
      bestFriendScore = comparisonScore;
    } 
  });
  
  people.push(req.body);
  console.log('POST /api/friends returning' + JSON.stringify(closestMatch));
  res.json(closestMatch);
});

module.exports = router;
