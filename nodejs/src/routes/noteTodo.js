'use strict'

const { createTodo } = require("../createTodo")

const noteTodo = function  ({ store }) {
    // higher order funciton
    return async function (req, res) {
        const { description } = req.body // body-parser module

        const todo = createTodo({ description })

        await store.noteTodo({ todo })

        res.json({id: todo.id})
    }
}

module.exports = { noteTodo }