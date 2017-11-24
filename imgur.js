const request = require('request');
const cheerio = require('cheerio');

exports.imgScrape = (url,cb) =>{
    request(url, (err, res, body) => {
        if(err) {
            cb({
                error: err
            });
        }
        let $ = cheerio.load(body);
        let $url = url;
        let $img = $('.post-image img').attr('src');
        let $title = $('.post-title').text();
        let $desc = $('[itemprop=description]').text();
        
        
    
    let image = {
        url : $url,
        img : "http:"+$img,
        title: $title,
        description: $desc    
    }
    
    //Respond with final json
    
    console.log("Scraped",image);
    cb(image);
    });
}

//Promise Example

exports.imgScrapeP = (url) => {
    return new Promise((resolve, reject)=>{
        request(url, (err, res, body) => {
        if(err) {
            reject(error);
        }
        let $ = cheerio.load(body);
        let $url = url;
        let $img = $('.post-image img').attr('src');
        let $title = $('.post-title').text();
        let $desc = $('[itemprop=description]').text();
        
        
    
    let image = {
        url : $url,
        img : "http:"+$img,
        title: $title,
        description: $desc    
    }
    
    //Respond with final json
    
    console.log("Scraped",image);
    resolve(image);
    });
    });
}
