import { Status } from "./Status"

interface Todo<TData> {
    id: string
    description: String
    satus: Status
    assignee?: String // ? -> optional
    data: TData
}

export { Todo }