
// get data html to node js

// npm init -y
// npm i express
// npm bodyParser
// npm path
// send file function

var express = require('express')
var app = express();
var bodyParser = require('body-parser'); //  code for greek
var path = require('path')
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/form.html'));
  });
  app.get('/blog',function(req,res) {
    res.sendFile(path.join(__dirname+'/blog.html'));
    });
app.post('/' , function(req,res){
    var name = req.body.name
    var email = req.body.email
    console.log(name + email);
    res.send('success')
})
app.listen(3030)