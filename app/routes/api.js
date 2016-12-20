
//Create the router instance
var express = require('express');
var router = express.Router();

var feedbackData = require('../../data/feedback.json');

router.get('/api', function (req, res) {
    //spit the data inform of json
     res.json(feedbackData);
});

//Expose this route to app.js
module.exports = router;