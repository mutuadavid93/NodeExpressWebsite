var express = require('express');
var app = express();
var dataFile = require('../data/NodeJson.json');

//Set app environment variables (globally)
app.set('port', process.env.PORT || 3000);

//Create a default route
app.get('/', function (req, res) {
    var info = '<ul>';
    dataFile.speakers.forEach(function (item) {
        info += `<li>
                    <h2>${item.name}</h2>
                    <p>${item.summary}</p>
                </li>`;
    });
    info += '</ul>';
    
   res.send(`<h2>Welcome Nodejs and Express</h2>
        ${info}`); 
});

//Create the server
var server = app.listen(app.get('port'), function () {
    //command: PORT=4000 node app/app.js
    console.log("Server running at port "+app.get('port'));
});