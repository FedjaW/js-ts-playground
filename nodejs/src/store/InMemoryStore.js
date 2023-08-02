'use strict'

class InMemoryStore {
    constructor () {
        // Intentionally left blank.
    }

    async initialize () {
        this.todos = []
    }

    // WTF: Wo ist das function keyword???
    async noteTodo ({todo}) {
        this.todos.push(todo)
    }

    async markTodoAsDone ({ id }) {
        const todo = this.todos.find(t => t.id === id)

        // Wenn kein todo gefunden wird, wird undefined returned
        // da undefined ein falsy value ist kann ich das if so schreiben:
        if (!todo) {
            throw new Error('Todo not found')
        }

        todo.status = 'done'
    }

    async getRemainingTodos () {
        return this.todos.filter(t => t.status === 'open')
    }
}

module.exports = { InMemoryStore }