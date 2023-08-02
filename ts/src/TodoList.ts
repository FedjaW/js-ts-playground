// in typescript gibt es:
// - private
// - protected
// - public

import { Todo } from "./Todo";

class TodoList<TData> {
    private todos: Todo<TData>[]

    public constructor () {
        this.todos = []
    }

    public note (description: string, data: TData): string {
        const id = crypto.randomUUID()

        const todo: Todo<TData> = {
            id,
            description,
            satus: 'open',
            data
        }

        this.todos.push(todo)

        return id
    }

    public edit (id: string, description: string): void {
        const todo = this.todos.find(t => t.id === id)
        if (!todo) {
            throw new Error('todo not found')
        }
        
        todo.description = description
    }

    public tickOff (id: string): void {
        const todo = this.todos.find(t => t.id === id)
        if (!todo) {
            throw new Error('todo not found')
        }
        
        todo.satus = 'done'
    }

    public discard (id: string): void {
        const todo = this.todos.find(t => t.id === id)
        if (!todo) {
            throw new Error('todo not found')
        }
        
        todo.satus = 'discarded'
    }

    public getAllTodos (): Todo<TData>[] {
        return this.todos
    }

    public getOpenTodos (): Todo<TData>[] {
        return this.todos.filter(t => t.satus === 'open')
    }
}

export { TodoList }
