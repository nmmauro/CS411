/**
 * Created by kishanpatel on 11/20/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    res.send({value: 'hey'});
    console.log("gott log in");
});

module.exports = router;
