var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var request = require("request");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb');
var trends = [];

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

router.post('/woeid', function(req, res, next) {

    request ({
        url: 'http://woeid.rosselliot.co.nz/lookup/' + req.body.lookupLocation,
        method: 'POST'},

        function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            var index = (response['body']).search("data-woeid") + 12;
            var woeid = "";
            while (response['body'][index] != '"') {
                woeid += response['body'][index];
                index++;
            }
            res.send(woeid);
        }
    });
});

router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/testNodejs';
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("unable to connect to db", err);
        }
        else {
            console.log("connected to db");
            var collection = db.collection('users');
            var newUser = {username: username, password: password};
                collection.find({"username": username}).toArray(function(err, result) {
                    if (result.length) {
                        res.send("user exists");
                        db.close();
                    }
                    else {
                        collection.insert([newUser], function(err, result) {

                            res.send("created user");
                        })
                        db.close();
                    }
                })
        }
    });
});

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/testNodejs';
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.log("unable to connect to db");
        }
        else {
            console.log("connection established to db");
        }
        var collection = db.collection('users');
        collection.find({"username": username}).toArray(function(err, result) {
            if (result.length && result[0]['username'] == username && result[0]['password'] == password) {
                console.log("yes this the right username and password");
                res.send(result[0]);

            }
            else {
                res.send("user does not exist");
                console.log("invalid credentials");
            }
        });
        db.close();
    })
});

router.post('/addLocation', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var location = req.body.location;
    var woeid = req.body.woeid;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/testNodejs';
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("unable to connect to db");
        }
        else {
            console.log("connection established to db");
        }
        var collection = db.collection('users');
        collection.find({"username": username}).toArray(function (err, result) {
            collection.update({username: username}, { $push: {locations: location}});
            collection.update({username: username}, { $push: {woeids: woeid}});
            collection.update({username: username}, { $push: {latitudes: latitude}});
            collection.update({username: username}, { $push: {longitudes: longitude}});
        })
    })
});

module.exports = router;


