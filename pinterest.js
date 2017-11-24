var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8000;

var url = "https://in.pinterest.com/pin/530791506074254014/";

request(url, function(err, res, body) {
    var pin = {};
    var $ = cheerio.load(body);
    
    var img = $("meta[itemprop = 'image']").get(1);
    var $img = $(img).attr('content');
    var $desc = $("meta[itemprop = 'text']").attr('content');
    
    pin = {
        imgURL: img,
        img : $img,
        desc : $desc,
        url : url
    };
    
    console.log("Scraped: ",pin);
});

app.listen(port);
console.log("Server running on "+port);
