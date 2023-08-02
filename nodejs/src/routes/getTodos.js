'use strict'

// Frage an mich: ({ store }), store wird desctructured? 
const getTodos = function  ({ store }) {
    // higher order funciton
    return async function (req, res) {
        const remainingTodos = await store.getRemainingTodos()

        res.json(remainingTodos)
    }
}

module.exports = { getTodos }