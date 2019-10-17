var express = require("express");
var path = require("path");
var app = express()

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRpouting")(app);
require("./app/routing/htmlRouting")(app);

app.listen(PORT, function(){
    console.log("We are listening on PORT" + PORT);
})