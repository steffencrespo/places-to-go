// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var Togo = mongoose.model('Togo', {
    name : String,
    url: String,
    rating: String

});

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all Togos
app.get('/api/togos', function(req, res) {

    // use mongoose to get all togos in the database
    Togo.find(function(err, togos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(togos); // return all togos in JSON format
    });
});

// create togo and send back all togos after creation
app.post('/api/togos', function(req, res) {

    // create a togo, information comes from AJAX request from Angular
    Togo.create({
        text : req.body.text,
        done : false
    }, function(err, togo) {
        if (err)
            res.send(err);

        // get and return all the togos after you create another
        Togo.find(function(err, togos) {
            if (err)
                res.send(err)
            res.json(togos);
        });
    });

});

// delete a togo
app.delete('/api/togos/:togo_id', function(req, res) {
    Togo.remove({
        _id : req.params.togo_id
    }, function(err, togo) {
        if (err)
            res.send(err);

        // get and return all the togos after you create another
        Togo.find(function(err, togos) {
            if (err)
                res.send(err)
            res.json(togos);
        });
    });
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");