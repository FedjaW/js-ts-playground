'use strict'

const { createTodo } = require("../createTodo")

const markTodoAsDone = function  ({ store }) {
    return async function (req, res) {
        const { id } = req.params // <=> const id= req.params.id

        try {
            await store.markTodoAsDone({ id })
        } catch (error) {
            res.status(404).end()
            return // <=> res.status(404).end() return

            // ohne das return würde der nachfolgende code auch ausgeführt werden.
        }

        res.json({})
    }
}

module.exports = { markTodoAsDone }