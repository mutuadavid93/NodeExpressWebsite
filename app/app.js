var express = require('express');
var app = express();
var dataFile = require('../data/NodeJson.json');

//Set app environment variables (globally)
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

//Require our routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

//Create the server
var server = app.listen(app.get('port'), function () {
    //command: PORT=4000 node app/app.js
    console.log("Server running at port "+app.get('port'));
});