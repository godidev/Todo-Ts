import { useMemo } from 'react'
import './App.css'
import Todos from './components/Todos'
import Header from './components/Header'
import Footer from './components/Footer'
import { filterSel } from './consts'
import useStorage from './hooks/useStorage.ts'

function App() {
  const { todos, filter, dispatch } = useStorage('todos')

  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        if (filter === filterSel.COMPLETED) {
          return todo.completed
        } else if (filter === filterSel.UNCOMPLETED) {
          return !todo.completed
        } else {
          return todo
        }
      })
      .sort((a, b) => (a.completed === b.completed ? 0 : b.completed ? -1 : 1))
  }, [filter, todos])

  const completedSum = filteredTodos.filter((todo) => todo.completed).length

  return (
    <div className='container'>
      <Header dispatch={dispatch} />
      <Todos todos={filteredTodos} dispatch={dispatch} />
      <Footer dispatch={dispatch} completedSum={completedSum} />
    </div>
  )
}

export default App
