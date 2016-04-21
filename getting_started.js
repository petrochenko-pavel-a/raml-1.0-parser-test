var raml = require('raml-1-parser');
var fs = require("fs");
var path = require("path");

// Here we create a file name to be loaded
var fName = path.resolve(__dirname, "./src/index.raml");

// Parse our RAML file with all the dependencies
var api = raml.loadApiSync(fName);

api.errors().forEach(function(x){
    console.log(JSON.stringify(x, null, 2));
});

//console.log(JSON.stringify(api.toJSON(), null, 2));
