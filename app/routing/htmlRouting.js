var path = require("path");
var express = require("express");

module.exports = function (app) {

    app.get("/home", function(req, res){
        res.sendFile("../public/home.html");
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public.survey.html"))
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    });
};