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

export type filterValue = 'all' | 'completed' | 'uncompleted'

export type ListOfTodos = Todo[]

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const COMPLETE_TODO = 'COMPLETE-TODO'
export const SET_FILTER = 'SET-FILTER'
export const DELETE_COMPLETED = 'DELETE-COMPLETED'
export const CHANGE_TODO_TITLE = 'CHANGE-TODO-TITLE'

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: { newTodo: Todo }
}

interface ChangeTodoTitleAction {
  type: typeof CHANGE_TODO_TITLE
  payload: { newTitle: string; id: TodoId }
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

interface SetFilterAction {
  type: typeof SET_FILTER
  payload: { filter: filterValue }
}

interface DeletedCompletedAction {
  type: typeof DELETE_COMPLETED
}

export type TodoAction =
  | AddTodoAction
  | RemoveTodoAction
  | ChangeCategoryAction
  | CompleteTodoAction
  | SetFilterAction
  | DeletedCompletedAction
  | ChangeTodoTitleAction
