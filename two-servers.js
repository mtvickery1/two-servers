var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;


function goodRequest(request, response) {
    response.end("You are such an awesome dude...WOW! Path: " + request.url);
}
function badRequest(request, response) {
    response.end("You stink bro... Path: " + request.url);
}


var goodServer = http.createServer(goodRequest);
var badServer = http.createServer(badRequest);


goodServer.listen(goodPORT, function() {
    console.log(`We hear ya! on: http://localhost: ${goodPORT}`);
});

badServer.listen(badPORT, function() {
    console.log(`Mhmmm yeah were here: http://localhost: ${badPORT}`);
});