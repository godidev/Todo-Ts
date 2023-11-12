import { useMemo, useReducer, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import { filterSel } from './consts'
import { type filterValue } from './types.ts'
import { todoReducer } from './todoReducer.tsx'

const todosData = [
  { id: '1', title: 'Buy groceries', completed: false, category: 'chores' },
  { id: '2', title: 'Walk the dog', completed: true, category: 'chores' },
  { id: '3', title: 'Finish homework', completed: false, category: 'chores' },
  { id: '4', title: 'Clean the house', completed: true, category: 'chores' },
  { id: '5', title: 'Go to the gym', completed: false, category: 'chores' },
]

function App() {
  const [todos, dispatch] = useReducer(todoReducer, todosData)
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

  const completedSum = filteredTodos.filter((todo) => todo.completed).length

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      <Todos todos={filteredTodos} dispatch={dispatch} />
      <Footer
        handleChangeFilter={handleChangeFilter}
        completedSum={completedSum}
      />
    </div>
  )
}

export default App
