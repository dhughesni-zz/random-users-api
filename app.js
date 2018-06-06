//Here we are calling our installed modules and assigning them to variable express and bodyParser respectively
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/routes.js");
var app = express();

//The two lines above tells express to accept both JSON and url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

//Here we defined the port where our server should be running on, but just one more thing to finally start our awesome API, yeah!! the contents of our routes.js
var server = app.listen(3000, function () {
    console.log("randomUsersAPI running on port:", server.address().port);
    console.log("http://localhost:", server.address().port);
    console.log("Available APIs:");
    console.log("http://localhost:3000/user");
    console.log("http://localhost:3000/users/10");
});
