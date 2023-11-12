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

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const COMPLETE_TODO = 'COMPLETE-TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: { newTodo: Todo }
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO
  payload: { id: TodoId; completed: TodoCompleted }
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO
  payload: { id: TodoId }
}

interface ChangeCategoryAction {
  type: typeof CHANGE_CATEGORY
  payload: { id: TodoId; category: TodoCategory }
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | ChangeCategoryAction
  | CompleteTodoAction
