var express = require("express");
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.set("view engine","ejs");

app.get("/", function(req,res){
  res.render("home");
});

app.get("/about", function(req,res){
  res.render("about");
});

//app.listen(process.env.PORT, process.env.IP);

app.listen(port, ip);


//app.listen(3000);
