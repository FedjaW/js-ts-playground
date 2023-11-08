# Commands

Start server

```CLI
node app.js
```

GET

```CLI
curl -i http://localhost:3000
```

POST

```CLI
curl -X POST -H 'content-type:applyication/json' -d '{"description":"asdasda" }' http://localhost:3000/note-todo
```

GET

```CLI
curl -i http://localhost:3000/todos
```

POST - id einsetzen!

```CLI
curl -X POST -H 'content-type:applyication/json' http://localhost:3000/mark-todo-as-done/{id}
```
