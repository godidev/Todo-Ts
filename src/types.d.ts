export interface Todo {
  id: string
  title: string
  completed: boolean
  category: string | null
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type filterValue = 'all' | 'completed'

export type ListOfTodos = Todo[]
