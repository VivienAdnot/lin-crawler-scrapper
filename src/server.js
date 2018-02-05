var express = require('express');
var bodyParser = require('body-parser');

var scraper = require('./scraper/imdb-scraper');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send({'serverLive' : true});
});

app.get('/scrape/:url', function(req, res){
    scraper.callLinkedin();
    //scraper.callUrl("http://localhost:8090/");
    //scraper.callUrl("http://www.imdb.com/title/" + req.params.url);
    //url = 'http://www.imdb.com/title/tt1229340/';
    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!');
});

app.listen(8085);