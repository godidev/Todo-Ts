import {
  type Todo,
  ADD_TODO,
  CHANGE_CATEGORY,
  COMPLETE_TODO,
  REMOVE_TODO,
  type TodoAction,
  filterValue,
  SET_FILTER,
} from './types'

interface AppState {
  todos: Todo[]
  filter: filterValue
}

export function todoReducer(
  state: AppState,
  { type, payload }: TodoAction,
): AppState {
  switch (type) {
    case ADD_TODO: {
      const { newTodo } = payload
      return { ...state, todos: [...state.todos, newTodo] }
    }
    case REMOVE_TODO: {
      const { id } = payload
      const remainingTodos = state.todos.filter((todo) => todo.id !== id)
      return { ...state, todos: remainingTodos }
    }
    case CHANGE_CATEGORY: {
      const { id, category } = payload
      const changedTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, category } : todo,
      )
      return { ...state, todos: changedTodo }
    }
    case COMPLETE_TODO: {
      const { id, completed } = payload
      const changedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
      return { ...state, todos: changedTodos }
    }
    case SET_FILTER: {
      const { filter } = payload
      return { ...state, filter }
    }
    default: {
      return state
    }
  }
}
