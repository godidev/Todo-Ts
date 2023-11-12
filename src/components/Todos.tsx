import { useState } from 'react'
import { ListOfTodos, TodoAction } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  dispatch: React.Dispatch<TodoAction>
}

const Todos: React.FC<Props> = ({ todos, dispatch }) => {
  const [categories, setCategories] = useState(['chores', 'homework'])

  const addCategory = (cat: string) => {
    setCategories((prevCat) => [...prevCat, cat])
  }
  return (
    <div className='todos-list'>
      {todos.map(({ id, title, completed, category }) => (
        <Todo
          key={id}
          id={id}
          categories={categories}
          category={category}
          title={title}
          addCategory={addCategory}
          completed={completed}
          dispatch={dispatch}
        />
      ))}
    </div>
  )
}
export default Todos
