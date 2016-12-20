var express = require('express');
var app = express();
var reload = require('reload');
var dataFile = require('../data/NodeJson.json');

//Set app environment variables (globally)
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

//configure view engine
app.set('view engine', 'ejs');
app.set('views', 'app/views');

//global local var available in all views
app.locals.siteTitle = 'NodeExpress';
app.locals.allSpeakers = dataFile.speakers;

//Require our routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

//Designate a folder
app.use(express.static('app/public'));

//Create the server
var server = app.listen(app.get('port'), function () {
    //command: PORT=4000 node app/app.js
    console.log("Zoombie detected on port "+app.get('port'));
});

reload(server, app);