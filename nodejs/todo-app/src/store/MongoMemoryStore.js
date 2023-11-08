'use strict'

const { MongoClient } = require('mongodb')

class MongoMemoryStore {
    constructor ({ hostname, port, username, password, database }) {
        this.hostname = hostname
        this.port = port
        this.username = username
        this.password = password
        this.database = database
    }

    async initialize () {
        const connectionString = `mongodb://${this.username}:${this.password}@${this.hostname}:${this.port}/`
        const client = new MongoClient(connectionString)
        await client.connect()

        const database = client.db(this.database)
        const collection = database.collection('todos') // monog-phyosophy: create on first use

        this.collection = collection
    }

    async noteTodo ({ todo }) {
        await this.collection.insertOne(todo)
    }

    async markTodoAsDone ({ id }) {
        const { modfiedCount } = await this.collection.updateOne(
            { id },
            { $set: { status: 'done' } }
        )
        
        if (modfiedCount === 0) {
            throw new Error('Todo not found')
        }
    }

    async getRemainingTodos () {
        return await this.collection.find({ status: 'open' }).toArray()
    }
}

module.exports = { MongoMemoryStore }