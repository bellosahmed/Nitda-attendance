//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const https = require("https");


const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/dashboard", function (req, res) {
    res.render("dashboard");
});

app.get("/attendance", function (req, res) {
    res.render("attendance");
});

app.get("/profile", function (req, res) {
    res.render("profile");
});

app.listen(3000, function () {
    console.log("It is working on server 3000!")
});