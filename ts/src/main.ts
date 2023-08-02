import { Metada } from "./Metadata";
import { TodoList } from "./TodoList";

const todoList = new TodoList<Metada>()

const todo1 = todoList.note('Code aufräumen', { createdDateString: "2.8.2023", modifiedDateString: '' })
const todo2 = todoList.note('Ui bauen', { createdDateString: "2.8.2023", modifiedDateString: '' })

todoList.tickOff(todo1)