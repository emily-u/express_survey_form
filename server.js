// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.post('/survey', function (req, res){
    req.session.data = req.body;
    // console.log(req.session.name);
    res.redirect("result");
    
});

app.get('/result', function(req, res) {
    res.render('result', {data: req.session.data});
   })


app.listen(8000, function() {
 console.log("listening on port 8000");
});
