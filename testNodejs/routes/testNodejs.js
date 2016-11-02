
var express = require('express');
var router = express.Router();
var request = require("request");

router.get ('/', function (req, res, next) {

    var options = { method: 'POST',
        url: 'http://apilayer.net/api/live',
        qs:
        { access_key: 'a6f6e50c8a0753c2816812d2c2775bb5',
            source: 'USD',
            currencies: 'EUR',
            format: '1' },
        headers:
        { 'content-type': 'application/x-www-form-urlencoded',
            'postman-token': 'a1da4a62-ef9f-70be-f9d3-e024a72e32bf',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

var rate = JSON.parse(body).quotes.USDEUR;
        var value = rate * 100;
console.log(rate);
        res.send({value: value});
    });
});

router.post ('/', function (req, res, next) {
    var options = { method: 'POST',
        url: 'http://apilayer.net/api/live',
        qs:
        { access_key: 'a6f6e50c8a0753c2816812d2c2775bb5',
            source: 'USD',
            currencies: 'EUR',
            format: '1' },
        headers:
        { 'content-type': 'application/x-www-form-urlencoded',
            'postman-token': 'a1da4a62-ef9f-70be-f9d3-e024a72e32bf',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        var rate = JSON.parse(body).quotes.USDEUR;
        var dollars = req.body.dollars;
        var result = dollars * rate;
        res.send({value: result});
    });
});

module.exports = router;