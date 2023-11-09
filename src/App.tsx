import { useMemo, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import { filterSel } from './consts'
import { type filterValue, type Todo, type TodoId } from './types'

const todosData = [
  { id: '1', title: 'Buy groceries', completed: false, category: null },
  { id: '2', title: 'Walk the dog', completed: true, category: null },
  { id: '3', title: 'Finish homework', completed: false, category: null },
  { id: '4', title: 'Clean the house', completed: true, category: null },
  { id: '5', title: 'Go to the gym', completed: false, category: null },
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

  const handleChangeFilter = (filter: filterValue): void => {
    setFilter(filter)
  }

  const handleDelete = ({ id }: TodoId): void => {
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
    id: string
    completed: boolean
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
      />
      <Footer
        handleChangeFilter={handleChangeFilter}
        completedSum={completedSum}
      />
    </div>
  )
}

export default App
