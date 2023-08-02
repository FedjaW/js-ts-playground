'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { getTodos } = require('./routes/getTodos')
const { noteTodo } = require('./routes/noteTodo')
const { markTodoAsDone } = require('./routes/markTodoAsDone')

const getApi = function ({ store }) {
    const api = express()

    // middleware - muss vor den routes kommen
    api.use(cors())
    api.use(bodyParser.json())

    // routes ----

    // Commands
    api.post('/note-todo', noteTodo({ store }))
    api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }))

    // Queries
    api.get('/', (req, res) => {
        res.json({message: 'Willkommen bei SUPER TODO'})
    })

    api.get('/todos', getTodos({ store }))

    return api
}

// Alles was in einer Datei ist, ist erstmal privat
// daher ist ein export notwendig um sie public zu machen
module.exports = { getApi }