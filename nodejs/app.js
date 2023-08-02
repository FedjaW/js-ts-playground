'use strict'

const { getApi } = require('./src/getApi') // descrtructuring
const { InMemoryStore } = require('./src/store/InMemoryStore')
const { MongoMemoryStore } = require('./src/store/MongoMemoryStore')

const { flaschenpost } = require('flaschenpost')
const { processenv } = require('processenv')
const http = require('http')

const main = async () => {
    const logger = flaschenpost.getLogger()

    // const store = new InMemoryStore()
    const store = new MongoMemoryStore({
        hostname: 'localhost',
        port: 27017,
        username: 'node',
        password: 'node',
        database: 'todos'
    })

    await store.initialize()

    const api = getApi({ store })
    const server = http.createServer(api)
    const port = processenv('PORT', 3_000)

    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, {
    //         'content-type': 'text/html'
    //     })
    //     res.write("<h1>Hallo Welt!</h1>")
    //     res.write(`<p>Verb: ${req.method}, Pfad: ${req.url}</p>`)
    //     res.end()
    // })

    server.listen(port, () => {
    logger.info("Server listening on port: ", { port })
    // logger.info("server listening on port http://localhost:3000")
    })
}

main().catch(e => console.log(e))