const scraper = require('./imgur');
const url = "https://imgur.com/gallery/KjmAD";
const fs = require('fs');
const path = "text.txt";

//Callback example
/*
scraper.imgScrape(url, (data)=>{
    console.log("Data Received",data);
});
*/

//Promise Example

scraper.imgScrapeP(url)
    .then((data)=>{
        console.log("Data Received in text.txt");
        fs.writeFile(path, JSON.stringify(data),(error)=>{
            if(error) {
                console.log(error);
            }
            console.log("Successfully Wrote Data");
        });
    })
    .catch((error)=>{
        console.log("Error scraping data");    
    });
