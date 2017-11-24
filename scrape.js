var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8000;

var url = "https://www.indeed.co.in/cmp/Xornor/jobs/ASP-Net-Developer-c546db3a3033d925";

request(url, function (err, res, body) {
    var $ = cheerio.load(body);
    var companyName = $('.company');
    var companyNameText = companyName.text();
    /*$('.company').filter(function() {
        var companyName = $(this);
        companyNameText = companyName.text();
    });*/
    
    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();
    
    var location = $('.location');
    var locationText = location.text();
    
    var summary = $('#job_summary p');
    var summaryText = summary.text();
    
    var job = {
        jobTitle : jobTitleText,
        location : locationText,
        companyName: companyNameText,
        summary : summaryText
    }
    
    console.log(job);
});

app.listen(port);
console.log("Server running on "+port);
