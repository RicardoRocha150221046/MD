const express = require('express');
const app = new express();

//app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.get('/', function(req, res){
    //res.end('Ta bom');
    res.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function (){
    console.log("Server started on Port:" + port);
});