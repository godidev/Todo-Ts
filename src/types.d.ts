export interface Todo {
  id: string
  title: string
  completed: boolean
  category: string | null
}

export type TodoId = Todo['id']
export type TodoTitle = Todo['title']
export type TodoCompleted = Todo['completed']
export type TodoCategory = Todo['category']

export type filterValue = 'all' | 'completed'

export type ListOfTodos = Todo[]
