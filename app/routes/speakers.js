
var express = require('express');
var router = express.Router();

//Single speaker
router.get('/speakers/:speakerid', function (req, res) {
    var dataFile = req.app.get('appData');
    //get an object from array (speaker)
    var speaker = dataFile.speakers[req.params.speakerid]; 
    
   res.send(`
        <link rel="stylesheet" href="/css/styles.css"/>
        <img src="/images/misc/${speaker.shortname}_tn.jpg" alt="Speaker" />
        <h2>${speaker.title}</h2>
        <h4>with ${speaker.name}</h4>
        <p>${speaker.summary}</p>
    
        <script src="/reload/reload.js"></script>
    `); 
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
        pageID: 'speakers',
        speakers: pageSpeakers,
        artwork: pagePhotos
    }); 
});

module.exports = router;