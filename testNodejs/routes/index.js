var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var request = require("request");
var XMLHttpRequest = require('XMLHttpRequest');

var users = '[{"username":"kishan", "password":"patel"},{"username":"a", "password":"b"}]';
var arr = JSON.parse(users);

var trends = [];



// POST send Google Maps API Key
// router.post('/index', function(req, res, next) {
//     var key = "AIzaSyCM63S2j8da77lKI4FhcD7aJIPl6lA_nb0";
//     res.send({key: key}, {users: users});
// })

// router.get('/index', function (req, res, next) {
//
// });

var twitterClient = new Twitter({
    consumer_key: 's0V6XvYaqFG0CbYaRNmManavg',
    consumer_secret: 'A9lDshmItkYy0MszJIxM5XuvOBQEBUTRPwEY1zjnreDMwjG12y',
    access_token_key: '1045563338-I16wvU8odbs7QqQ5xedXXNPcQRuzwYYyDULS0px',
    access_token_secret: 'M6HrTMcRdGSJUyN3tdXXKp9UPilE3XSIbyIQVdKlGhgxW'
});

// GET index page.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'trendmap' });
});

router.post('/', function (req, res, next) {
    var search = 'trends/place';
    var params;
    //console.log(req.body.woeid);
    params = {id: req.body.woeid};

    twitterClient.get(search, params, function(error, result, response) {
        //console.log("params");
        //console.log(params);
        if (!error) {
            var numberOfTrends = result[0]['trends'].length; //number of trends
            for (var i = 0; i < numberOfTrends; i++) {
                trends[i] = ((result[0]['trends'][i]['name']));
            }
            //console.log(trends);
            res.send(trends);

        }
    });
});








// var my = new XMLHttpRequest();
// my.open('GET', 'http://woeid.rosselliot.co.nz/lookup/Boston', false);
// console.log("suppp");
// my.send(null);
// if (my.status == 200) {
//     dump(my.responseText);
// }
// else {
//     console.log(my.responseText);
// }





module.exports = router;










// twitterClient.get('statuses/user_timeline', {user_id: 'kishan8910'}, function(error, tweets, response) {
//     console.log(tweets);
// });

// var stream = twitterClient.stream('geo/search', {track: 'boston university'});
// stream.on('data', function(event) {
//     console.log(event && event.text);
// });