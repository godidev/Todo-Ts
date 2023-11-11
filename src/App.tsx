import { useMemo, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import { filterSel } from './consts'
import {
  TodoCategory,
  type filterValue,
  type Todo,
  type TodoId,
  TodoCompleted,
} from './types'

const todosData = [
  { id: '1', title: 'Buy groceries', completed: false, category: 'chores' },
  { id: '2', title: 'Walk the dog', completed: true, category: 'chores' },
  { id: '3', title: 'Finish homework', completed: false, category: 'chores' },
  { id: '4', title: 'Clean the house', completed: true, category: 'chores' },
  { id: '5', title: 'Go to the gym', completed: false, category: 'chores' },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(todosData)
  const [filter, setFilter] = useState<filterValue>(filterSel.ALL)

  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        if (filter === filterSel.COMPLETED) return todo.completed
        return todo
      })
      .sort((a, b) => (a.completed === b.completed ? 0 : b.completed ? -1 : 1))
  }, [filter, todos])

  const handleCategoryChange = ({
    id,
    category,
  }: {
    id: TodoId
    category: TodoCategory
  }) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, category } : todo,
    )
    setTodos([...newTodos])
  }

  const handleChangeFilter = (filter: filterValue): void => {
    setFilter(filter)
  }

  const handleDelete = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleSubmit = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const handleComplete = ({
    id,
    completed,
  }: {
    id: TodoId
    completed: TodoCompleted
  }): void => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })

    setTodos(changedTodos)
  }

  const completedSum = filteredTodos.filter((todo) => todo.completed).length

  return (
    <div className='container'>
      <Header handleSubmit={handleSubmit} />
      <Todos
        todos={filteredTodos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleCategoryChange={handleCategoryChange}
      />
      <Footer
        handleChangeFilter={handleChangeFilter}
        completedSum={completedSum}
      />
    </div>
  )
}

export default App
