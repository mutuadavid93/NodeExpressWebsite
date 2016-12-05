var express = require('express');
var app = express();

//Create a default route
app.get('/', function (req, res) {
   res.send('<h1>Welcome to learning Node</h1>'); 
});

//Create the server
var server = app.listen(3000, function () {
    console.log("Server running at port 3000");
});