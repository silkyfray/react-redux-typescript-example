var http = require("http");
var rp = require("request-promise");

var testData = [
    "http://www.carolynparker.com/",
    "http://kube.frederiksberg.dk/",
    "http://www.futuremobility.se/",
    "http://www.highfivebro.com/",
    "http://www.chateauversailles.fr/",
    "http://lookbook.slam.com/",
    "http://www.volleyball.ca/en",
    "http://www.playinglynch.com/",
    "https://justcoded.com/",
    "https://www.krealid.com/",
    "https://madebyfalcon.co.uk/"
    ]

testData.forEach(function(design) {
    var options = {
        method: 'POST',
        uri: "http://localhost:3001/api/design",
        body: {
            designUrl: design,
            title: "This website looks really good",
            description: "Some description"
         },
        json: true // Automatically stringifies the body to JSON
    };
    console.log("posting: " + design);
     rp.post(options)
     .then(response => console.log(response))
     .catch(response => console.log(response));
})


