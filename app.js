var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

/*
EXAMPLE 1
var url = "http://google.com";
request(url, function(err, res, body) {
    if(err)
        console.log(err);
    else 
        console.log(body);
});
*/


/*
EXAMPLE 2
var destination = fs.createWriteStream("./google.html");
var url = "http://google.com";
request(url)
    .pipe(destination); 
*/

var destination = fs.createWriteStream("./google.html");
var url = "http://google.com";
request(url)
    .pipe(destination)
    .on('finish', function() {
        console.log("Done");
    })
    .on('error', function(err) {
        console.log(err);
    });



app.listen(port);
console.log("Server running on "+port);
