// imports vendor
var express = require('express')
var mongoose = require('mongoose');
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

      // get the hostname to verify uniqueness
      let parsedUrl = url.parse(designUrl);
      let hostname = parsedUrl.hostname;
      // hostname only passes if the user entered the protocol. If he didn't then take the pathname as the web url
      if (!hostname)
        hostname = parsedUrl.pathname
      // check if that design has been submitted already
      models.DesignModel.findOne({ "url": new RegExp(hostname, "i") })
        .then(design => {
          // end request if found
          if (design) {
            res.end("A url for that website has already been submitted before.");
          }

          // take a snaphost of the website
          helpers.getUrlSnapshost(designUrl);

          res.sendStatus(200);
        })
        .catch(err => {
          res.end("Error processing request:", err);
        });

    }).catch(function (err) {
      res.end("Could not find a website at that url.");
    });
})

app.get("/api/heartbeat", function (req, res) {
  res.send("Successful connection through proxy.")
})

app.listen(PORT, function () {
  console.log('Example app listening on port', PORT)
})
