var express = require("express");
var app = express();
//var bodyParser = require("body-parser");
//var mongoose = require("mongoose");


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    /*mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}*/


//mongoose.connect(mongoURL);

/*var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});*/


app.set("view engine","ejs");

app.get("/", function(req,res){
  res.render("home");
});

app.get("/about", function(req,res){
  res.render("about");
});

/*var Campground = mongoose.model("Campground", campgroundSchema);


var newCampground = {name: "Sample1", image: "Image1", description: "Description1"};

Campground.create(newCampground,function(error,newlyCreated){
  if(error){
    res.render("home");
  } else {
    res.render("about");
  }
});*/


//app.listen(process.env.PORT, process.env.IP);

app.listen(port, ip);


//app.listen(3000);
