
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/chat', function (req, res) {
    //pass data into a view
    res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
    }); 
});

//Expose this route to app.js
module.exports = router;