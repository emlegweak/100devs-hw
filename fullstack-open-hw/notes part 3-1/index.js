//import express
const express = require('express')
//function express used to create an express application stored in the app variable
const app = express()

//express json-parser
//without the json-parser, the body property would be undefined, functions so that it takes the JSON data of a request, transforms it into a JS object, and then attaches it to the body property of the request object before the route handler is called
app.use(express.json())

//hardcoded list of notes in JSON format
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    }
]

// ==================================
// ROUTES
// ==================================

//route to the application that defines an event handler that is used to handle HTTP GET requests made to the application's / root
app.get('/', (request, response) => {
    //the request is answered by using the send method of the response object - calling the method makes the server respond to the HTTP request by sending a response containing the string that was passed to the send method
    response.send('<h1>Hello World!</h1>')
    //express automatically sets the value of the content-type header to be text/html, status code defaults to 200
})

//second route to the application that defines an event handler that accepts 2 parameters - 1st request parameter contains all info of the HTTP request and 2nd response parameter is used to define how the request is responded to
//handles all HTTP GET requests made to the notes path of the application
app.get('/api/notes', (request, response) => {
    //request is responded to with the json method of the response object - calling the method will send the notes array that was passed to it as a JSON formatted string
    response.json(notes)
    //express automatically sets the content-type header to application/json
})

//offer REST interface for operating on individual notes - create a route for fetching a single resource
//unique address for individual note is notes/10 where the number refers to note's unique ID
//handles all HTTP GET requests that are the form of /api/notes/SOMETHING where SOMETHING is an arbitrary string
app.get('/api/notes/:id', (request, response) => {
    //the id parameter in the route of a request can be accessed through the request object
    const id = Number(request.params.id)
    //the find method is used to find the note with an id that matches the parameter
    const note = notes.find(note => note.id === id)
    if(note){
    //the note is returned to the sender of the request
    response.json(note)
    }else{
        //if no note is found, the server should respond with status code 404 not found
        //since no data is attached to the response, we use the status method for setting the status and the end method for responding to the request without sending any data
        response.status(404).end()
    }
})

//logic for generating the new id number for notes
const generateId = () => {
    //notes.map(n => n.id) creates a new array that contains all the ids of the notes, Math.max returns the max value of the numbers that are passed to it, the three dot spread syntax transforms the array into individual numbers so it can be given directly as a parameter to Math.max
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0

    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    //if the received data is missing a value for the content property, the server will respond to the request with the status code 400 bad request
    if(!body.content){
        //calling return is crucial otherwise the code will execute to the very end and the malformed note gets saved to the application
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note ={
        //if the content property has a value, the note will be based on the received data
        content: body.content,
        //if the important property is missing, we will default the value to false, if the data saved in the body variable has the important property, the expression will evaluate to its value
        important: body.important || false,
        //better to generate timestamps on the server rather than in the browser since we can't trust that the host machine running the browser has its clock set correctly
        date: new Date(),
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

//route for deleting resources - deletion happens by making an HTTP DELETE request to the url of the resource
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    //if deleting a resource is successful, emaning that the note exists and it is removed, we respond to the request with the status code 204 no content and return no data with the response
    response.status(204).end()
})

//binds the server to the app variable to listen to HTTP requests sent to the port 3001
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, better go catch it...`)
})