
//Create the router instance
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   res.send(`
            <link rel="stylesheet" href="/css/styles.css"/>
    
            <h2>Nodejs and Express Training</h2>
            <img style="height: 380px; width: 100%;" src="/images/bg/NodeTrain.jpg" alt="Bg Pik" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
    
            <script src="/reload/reload.js"></script>
   `); 
});

//Expose this route to app.js
module.exports = router;