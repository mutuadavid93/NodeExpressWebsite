
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('default'); 
});

//Expose this route to app.js
module.exports = router;