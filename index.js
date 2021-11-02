const express = require('express');
const path = require('path')

const app = new express();

app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function (){
    console.log("Server started on Port:" + port);
});