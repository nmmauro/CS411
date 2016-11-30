/**
 * Created by kishanpatel on 11/30/16.
 */

var express = require('express');
var router = express.Router();
var request = require("request");

router.post('/', function(req, res, next) {
    request({lookupLocation: lookupLocation}) ({
        url: 'http://woeid.rosselliot.co.nz/' + lookupLocation,
        method: 'POST'


    }, function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            //console.log((response['body']));
            var index = (response['body']).search("data-woeid") + 12;
            var x = "";
            while (response['body'][index] != '"') {
                x += response['body'][index];
                index++;
                // while (response['body'][i] == '0')
                // console.log(response['body'][i]);
            }
            console.log(x);
        }
    });
});




module.exports = router;