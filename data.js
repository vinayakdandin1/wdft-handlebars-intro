//-----------------------------------
// DO NOT MAKE CHANGES TO THIS FILE
//-----------------------------------

//-----------------------------------
// PLEASE ONLY READ THE COMMENTS
//-----------------------------------

// Just a simple array of objects
let students = [
    {
        name: 'Joe',
        city: 'Miami',
    },
    {
        name: 'John',
        city: 'London',
    },
    {
        name: 'James',
        city: 'Berlin',
    },
    {
        name: 'Javier',
        city: 'Liverpool',
    }
]

// Just a simple array of objects
let instructors = [
    {
        name: 'Gerrard',
        city: 'Madrid',
    },
    {
        name: 'Gerry',
        city: 'Turin',
    },
    {
        name: 'George',
        city: 'Lisbon',
    },
]

// This function returns a promise.
// Assume we fetch this data somewhere from the internet and it takes 2 seconds
function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume we fetch the students from somehwere
            // we resolve the promise and pass the `students` declared at the top of the file
            resolve(students)
        }, 2000)
    })
    return myPromise
}

// This function returns a promise.
// Assume we fetch this data somewhere from the internet and it takes 1 second
function getTeachers(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // assume we fetch the teahers from somehwere
            // we resolve the promise and pass the `instructors` declared at the top of the file
            resolve(instructors)
        }, 1000)
    })
    return myPromise
}

// EXPORTING things out of this file to that other files may `require` it
module.exports = {
    getStudents, // we are exporting a function here
    getTeachers, // we are exporting a function here
    students,    // we are exporting an array of objects here
    instructors  // we are exporting an array of objects here
}