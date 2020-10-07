const express = require("express");

const app = express();
const port = 3000;

let {students, instructors} = require('./data')

app.use((req, res, next) => {
    console.log("Hello im the middleware");
    next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send('Hello Ironhacker!')
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);