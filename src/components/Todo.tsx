import { useState } from 'react'
import {
  type Todo as TodoType,
  type TodoId,
  TodoCategory,
  TodoCompleted,
} from '../types'
import Menu from './Menu'

interface Props extends TodoType {
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
  categories: string[]
  addCategory: (cat: string) => void
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  category,
  categories,
  handleDelete,
  handleComplete,
  handleCategoryChange,
  addCategory,
}) => {
  const [showMenu, setShowMenu] = useState(false)
  let timeoutId: ReturnType<typeof setTimeout>

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowMenu(true)
    }, 1000)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutId)
    setShowMenu(false)
  }

  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#4c4c4c' : '#242424',
  }
  return (
    <div
      style={styles}
      className='todo-item'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMenu && (
        <Menu
          id={id}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
          category={category}
          addCategory={addCategory}
        />
      )}
      <span onClick={() => handleComplete({ id, completed: !completed })}>
        {title}
      </span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}
export default Todo
