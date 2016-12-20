
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    
    //bring speakers in
    var pageSpeakers = data.speakers;
    
    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    //pass data into a view
    res.render('default', {
        pageTitle: 'Home',
        pageID: 'home',
        speakers: pageSpeakers,
        artwork: pagePhotos
    }); 
});

//Expose this route to app.js
module.exports = router;