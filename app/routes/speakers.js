
var express = require('express');
var router = express.Router();

//Single speaker
router.get('/speakers/:speakerid', function (req, res) {
    var dataFile = req.app.get('appData');
    //get an object from array (speaker)
    var speaker = dataFile.speakers[req.params.speakerid];
    
   res.send(`
        <h2>${speaker.title}</h2>
        <h4>with ${speaker.name}</h4>
        <p>${speaker.summary}</p>
    `); 
});

//All users route
router.get('/speakers', function (req, res) {
    var info = '<ul>';
    var dataFile = req.app.get('appData');
    
    dataFile.speakers.forEach(function (item) {
        info += `<li>
                    <h2>${item.name}</h2>
                    <p>${item.summary}</p>
                </li>`;
    });
    info += '</ul>';
    
   res.send(`${info}`); 
});

module.exports = router;