// jshint esversion : 6

// require express in our app
const express = require("express");

// require body-parser
const bodyParser = require("body-parser");

// setting up the express
const app = express() ;

// everytime we use this line of code to work with the body-parser
app.use(bodyParser.urlencoded({extended : true}));

// creating a root rout 
app.get("/", function (req, res) {

    res.sendFile(__dirname+ "/index.html");

});

// receiving the requests from the forms
app.post("/", function (req, res) {

    let num1 = Number(req.body.FirstNumber);
    let num2 = Number(req.body.SecondNumber);

    let result = num1 + num2;

    res.send("The result is "+ result);

    //res.send("Thank you for posting the valuable information");

});

// setting up the server on port 3000
app.listen(3000, function () {

    console.log("Server is running on the port 3000");

});