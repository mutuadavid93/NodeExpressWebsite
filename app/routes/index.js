
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    
    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    //pass data into a view
    res.render('default', {
        pageTitle: 'Home',
        pageID: 'home',
        artwork: pagePhotos
    }); 
});

//Expose this route to app.js
module.exports = router;