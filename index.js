// setup for express
const express = require("express");
const app = express();


const port = 3000;

// require some data form your data.js file
let {students, instructors} = require('./data')

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));

// ROUTES DEFINED BELOW

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/landing.html')
});


// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);