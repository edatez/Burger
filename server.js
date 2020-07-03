const express = require("express");
const exphbs = require("express-handlebars");
const burgerController = require ("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;

var app = express();

app.use (express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use (burgerController);

app.engine ("handlebars", exphbs({defaultLayout:"main"}));
app.set ("view engine", "handlebars");

app.listen (PORT, (err) => {
    if (err) throw err;
    console.log (`Listening to PORT : ${PORT}`);
});