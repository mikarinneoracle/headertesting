var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(__dirname + '/html'));

app.listen(port, function() {
    console.log('server listening on port ' + port);
});

app.get('/1', function(req, res) {
    var response = {};
    var header = '';
    for(var i=0; i < 1000; i++)
    {
        header = header + "A";
    }
    response.size = header.length;
    res.setHeader('test-header', header);
    res.send(JSON.stringify(response));
});

app.get('/10', function(req, res) {
    var response = {};
    var header = '';
    for(var i=0; i < 10000; i++)
    {
        header = header + "B";
    }
    response.size = header.length;
    res.setHeader('test-header', header);
    res.send(JSON.stringify(response));
});

app.get('/', function(req, res) {
    //var response = {};
    var response = [];
    for (key in req.headers) {
        res.setHeader(key, req.headers[key]);
        var el = {};
        el.header = key;
        el.size = req.headers[key].length;
        response.push(el)
    }
    /*
    var header = req.headers['test-header'];
    response.size = header.length;
    res.setHeader('test-header', header);
    */
    res.send(JSON.stringify(response));
});

app.get('/set-cookies', function(req, res) {
    //var response = {};
    var response = [];
    for (key in req.headers) {
        res.cookie(key, req.headers[key]);
        var el = {};
        el.header = key;
        el.size = req.headers[key].length;
        response.push(el)
    }
    /*
    var header = req.headers['test-header'];
    response.size = header.length;
    res.setHeader('test-header', header);
    */
    res.send(JSON.stringify(response));
});

app.post('/', function(req, res) {
    var data = req.body.data;
    res.cookie("data", data);
    var response = {};
    response.data = data;
    response.size = data.length;
    res.send(JSON.stringify(response));
});

