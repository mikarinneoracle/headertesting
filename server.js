var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

app.use(bodyParser.json());

app.listen(port, function() {
    console.log('server listening on port ' + port);
});

app.get('/1', function(req, res) {
    var response = {};
    response.size = '1k';
    var header = '';
    for(var i=0; i < 1000; i++)
    {
        header = header + "A";
    }
    res.setHeader('test-header', header);
    res.send(JSON.stringify(response));
});

app.get('/10', function(req, res) {
    var response = {};
    response.size = '10k';
    var header = '';
    for(var i=0; i < 10000; i++)
    {
        header = header + "B";
    }
    res.setHeader('test-header', header);
    res.send(JSON.stringify(response));
});

