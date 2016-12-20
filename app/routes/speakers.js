
var express = require('express');
var router = express.Router();

//Single speaker
router.get('/speakers/:speakerid', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    
    var pageSpeakers = [];
    
    data.speakers.forEach(function (item) {
        if(item.shortname === req.params.speakerid){
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });
    
    //pass data into a view
    res.render('speakers', {
        pageTitle: 'Speakers Info',
        pageID: 'speakerDetail',
        speakers: pageSpeakers,
        artwork: pagePhotos
    }); 
});

//All users route
router.get('/speakers', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    
    var pageSpeakers = data.speakers;
    
    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    //pass data into a view
    res.render('speakers', {
        pageTitle: 'Speakers',
        pageID: 'speakerList',
        speakers: pageSpeakers,
        artwork: pagePhotos
    }); 
});

module.exports = router;