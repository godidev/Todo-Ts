import {
  type Todo,
  ADD_TODO,
  CHANGE_CATEGORY,
  COMPLETE_TODO,
  REMOVE_TODO,
  type TodoAction,
} from './types'

export function todoReducer(todos: Todo[], action: TodoAction): Todo[] {
  const { type } = action
  switch (type) {
    case ADD_TODO: {
      const { newTodo } = action.payload
      return [...todos, newTodo]
    }
    case REMOVE_TODO: {
      const { id } = action.payload
      return todos.filter((todo) => todo.id !== id)
    }
    case CHANGE_CATEGORY: {
      const { id, category } = action.payload
      return todos.map((todo) =>
        todo.id === id ? { ...todo, category } : todo,
      )
    }
    case COMPLETE_TODO: {
      const { id, completed } = action.payload
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    }
    default: {
      return todos
    }
  }
}
