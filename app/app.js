var express = require('express');
var app = express();
var reload = require('reload');
var dataFile = require('../data/NodeJson.json');

//default socket.io with 0 params
var io = require('socket.io')();

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
app.use(require('./routes/chat'));

//Designate a folder
app.use(express.static('app/public'));

//Create the server
var server = app.listen(app.get('port'), function () {
    //command: PORT=4000 node app/app.js
    console.log("Zoombie detected on port "+app.get('port'));
});

//connect socket.io to server
io.attach(server);

//detect events
io.on('connection', function (socket) {
    //Detect Custom Events ( postMessage )
    socket.on('postMessage', function (data) {
        //Emit another Custom Message(Event)
        //msg to all connected devices
        io.emit('updateMessages', data);
    });
    
});

reload(server, app);