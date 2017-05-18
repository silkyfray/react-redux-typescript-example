var http = require("http");
var rp = require("request-promise");

var testData = [
    "http://familyorbit.com",
    "http://www.stereodose.com/",
    "http://erppy.co/",
    "http://www.fallingfalling.com/",
    "http://weavesilk.com/",
    "http://29a.ch/sandbox/2011/neonflames/#",
    "http://codepen.io/davidpanik/full/myMrLx/",
    "http://stars.chromeexperiments.com/",
    "http://www.ro.me/",
    "http://labs.dinahmoe.com/plink/",
    "http://imgur.com/a/4rn0o"
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


