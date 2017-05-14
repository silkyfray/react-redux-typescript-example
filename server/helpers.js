var ping = require("net-ping");
var webshot = require("webshot")


exports.pingUrl = function (url) {
    var session = ping.createSession();

    session.pingHost(target, function (error, target) {
        if (error) {
            console.log(target + ": " + error.toString());
            return true;
        }
        else {
            console.log(target + ": Alive");
            return false;
        }
    });
}

exports.getUrlSnapshost = function (url) {
    var options = {
        screenSize: { width: 1920, height: 1080 },
        quality: 60
    };

    webshot(url, 'test.jpeg', options, function (err) {
        // screenshot now saved to flickr.jpeg 
    });
}