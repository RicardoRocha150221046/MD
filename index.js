const express = require('express');
const app = new express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function (){
    console.log("Server started on Port:" + port);
});