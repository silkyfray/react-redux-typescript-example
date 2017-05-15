// imports vendor
var express = require('express')
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var bodyParser = require("body-parser")
var url = require("url");
var http = require("http");
var rp = require("request-promise");

// imports app
var constants = require("../shared/constants")
var models = require("./mongoModels")
var helpers = require("./helpers")

// app setup
var app = express()
const PORT = process.env.PORT || constants.kServerPort;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongo ORM setup
var mongoConnectionStr = 'mongodb://localhost/' + constants.kMongoDbName;
mongoose.Promise = global.Promise;
mongoose.connect(mongoConnectionStr);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to Mongo database");
});

app.post("/api/design", function (req, res) {
  // parse the body for the design info
  let { designUrl, title, description } = req.body;

  rp.get(designUrl)
    .then(function (pingResponse) {
      // at this point we have verified that url is valid
      // TODO: handle redirects
      Promise.resolve();
    })
    .then(function () {
      // get the hostname to verify uniqueness
      let parsedUrl = url.parse(designUrl);
      let hostname = parsedUrl.hostname;
      // hostname only passes if the user entered the protocol. If he didn't then take the pathname as the web url
      if (!hostname)
        hostname = parsedUrl.pathname
      // check if that design has been submitted already
      return models.DesignModel.findOne({ "url": new RegExp(hostname, "i") }).exec();
    })
    .then(function (design) {
      // end request if found
      if (design) {
        throw new Error("A url for that website has already been submitted before.")
     }
      else {
        return helpers.getUrlSnapshost(designUrl);
      }
      // take a snaphost of the website
    })
    .then(function (image) {
      // create a model
      let designModel = new models.DesignModel({
        url: designUrl,
        description: description,
        title: title,
        imageData: image,
        added: Date.now(),
        pending: true
      });
      return designModel.save();
    })
    .then(function (design) {
      res.status(200).send("Entered submission for:" + designUrl);
    })
    .catch(function (err) {
      res.status(400).send("Could not fulfill request. Reason:" + err);
    })
})

app.get("/api/heartbeat", function (req, res) {
  res.send("Successful connection through proxy.")
})

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
})
