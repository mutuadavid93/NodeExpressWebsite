
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/feedback', function (req, res) {
    //pass data into a view
    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback'
    }); 
});

//Expose this route to app.js
module.exports = router;