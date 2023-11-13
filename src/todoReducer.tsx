import {
  type Todo,
  ADD_TODO,
  CHANGE_CATEGORY,
  COMPLETE_TODO,
  REMOVE_TODO,
  type TodoAction,
  filterValue,
  SET_FILTER,
  DELETE_COMPLETED,
} from './types'

interface AppState {
  todos: Todo[]
  filter: filterValue
}

export function todoReducer(state: AppState, action: TodoAction): AppState {
  switch (action.type) {
    case ADD_TODO: {
      const { newTodo } = action.payload
      return { ...state, todos: [...state.todos, newTodo] }
    }
    case REMOVE_TODO: {
      const { id } = action.payload
      const remainingTodos = state.todos.filter((todo) => todo.id !== id)
      return { ...state, todos: remainingTodos }
    }
    case DELETE_COMPLETED: {
      const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
      return { ...state, todos: uncompletedTodos }
    }
    case CHANGE_CATEGORY: {
      const { id, category } = action.payload
      const changedTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, category } : todo,
      )
      return { ...state, todos: changedTodo }
    }
    case COMPLETE_TODO: {
      const { id, completed } = action.payload
      const changedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
      return { ...state, todos: changedTodos }
    }
    case SET_FILTER: {
      const { filter } = action.payload
      return { ...state, filter }
    }
    default: {
      return state
    }
  }
}
