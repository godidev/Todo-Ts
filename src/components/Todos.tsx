import { useState } from 'react'
import { ListOfTodos, TodoCategory, TodoCompleted, TodoId } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  handleDelete: (id: TodoId) => void
  handleComplete: ({
    id,
    completed,
  }: {
    id: TodoId
    completed: TodoCompleted
  }) => void
  handleCategoryChange: ({
    id,
    category,
  }: {
    id: TodoId
    category: TodoCategory
  }) => void
}

const Todos: React.FC<Props> = ({
  todos,
  handleDelete,
  handleComplete,
  handleCategoryChange,
}) => {
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
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </div>
  )
}
export default Todos
