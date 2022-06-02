//===================================
// MODULES
//===================================

const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 3001

//===================================
// MIDDLEWARES
//===================================

app.use(express.json())
app.use(morgan('tiny'))
app.use(morgan(':person'))


//===================================
// DATA
//===================================

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

//===================================
// ROUTES
//===================================

//PHONEBOOK-BACKEND 3.1 returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons
app.get('/api/persons', (request, response) => {
        response.json(persons)
})

//PHONEBOOK-BACKEND 3.2 shows the time that the request was received and how many entries are in the pphonebook at the time of processing the request
app.get('/info', (request, response) => {
    response.write(`<p>Phonebook has info for ${persons.length} people</p>`)
    response.write(`<p>${new Date().toString()}</p>`)
})

//PHONEBOOK-BACKEND 3.3 implements the functionality for a single phonebook entry, if an entry for a given id is not found the server must respond with the appropriate status code
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

//PHONEBOOK - BACKEND 3.4 implements functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})
//can test functionality either via postman or VSCode REST client in requests folder

//PHONEBOOK - BACKEND 3.5 expands the backend so new phonebook entries can be added by making HTTP POST requests
const generateId = () => {
    return Math.floor(Math.random() * 1000) + 50

}

app.post('/api/persons', (request, response) => {
  const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name and/or number entry missing'
        })
    } else if (persons.includes(body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    response.json(person)

})
//can test functionality either via postman or VSCode REST client in requests folder

//PHONEBOOK - BACKEND 3.7 add the morgan middleware to your application for logging - configure it to log messages to your console based on the tiny configuration
//see above - logs :method :url :status :res[content-length] - :response-time ms to console

//PHONEBOOK - BACKEND 3.8 configure morgan so that it also shows data sent in HTTP POST requests
morgan.token('person', (req,res) => {
    return JSON.stringify(req.body)
})
//THIS IS SO COOL!!!! I DID IT!!!!!!!

//===================================
// LISTENER (PORT)
//===================================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, better go catch it...`)
})