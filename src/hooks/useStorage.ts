import { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'

function useStorage(key: string) {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue
    ? JSON.parse(storedValue)
    : { todos: [], filter: 'all' }

  const [{ todos, filter }, dispatch] = useReducer(todoReducer, initial)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify({ todos, filter }))
  }, [todos])

  return { todos, filter, dispatch }
}
export default useStorage
