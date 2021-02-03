require('dotenv').config()

// setup for express
const express = require("express");
const app = express();

const port = process.env.PORT;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')

// require some data form your data.js file
let {students, instructors, getStudents, getTeachers} = require('./data')

// just a simple middleware to show you how it works
// you will always see that console.log when you visit any page
// app.use((req, res, next) => {
//     console.log("Hello im the middleware");
//     next();
// });

// letting your middleware know where to find all static files
app.use(express.static(__dirname + "/public"));


// ROUTES DEFINED BELOW

app.get("/", (req, res) => {

    let myName = 'Vinayak'

    res.render('landing.hbs', {
        name: myName, 
    })
});

app.get("/students", (req, res) => {

    getStudents()
        .then((students) => {
            res.render('students.hbs', {students})
        })
        .catch(() => {

        })


    //res.render('students.hbs', {students })
});

app.get("/instructors", (req, res) => {
    //Fetching all the instructors when the user visits this URL
    getTeachers()
        .then((instructors) => {
            //If successful show the page
            res.render('instructors.hbs', {instructors})
        })
        .catch(() => {

        })



    //res.render('instructors.hbs', {instructors})
});

// Express setup to listen for all client requests on a certain port
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);