
//Create the router instance
var express = require('express');
var router = express.Router();
var fs = require('fs');

//A middleware to handle post requests
var bodyParser = require('body-parser');

var feedbackData = require('../data/feedback.json');

router.get('/api', function (req, res) {
    //spit the data inform of json
     res.json(feedbackData);
});
 
//use the middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));//a simple form

//the actual post method on a route
router.post('/api', function (req, res) {
    feedbackData.unshift(req.body);
    
    //persist data even on server restart
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
    
    res.json(feedbackData);
});

//Delete a message
router.delete('/api/:id', function(req, res) {
    feedbackData.splice(req.params.id, 1);    
    //persist data even on server restart
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
    
    res.json(feedbackData);
});



//Expose this route to app.js
module.exports = router;