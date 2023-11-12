import { useState } from 'react'
import {
  type Todo as TodoType,
  TodoAction,
  COMPLETE_TODO,
  REMOVE_TODO,
} from '../types'
import Menu from './Menu'

interface Props extends TodoType {
  dispatch: React.Dispatch<TodoAction>
  categories: string[]
  addCategory: (cat: string) => void
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  category,
  categories,
  dispatch,
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
          category={category}
          dispatch={dispatch}
          addCategory={addCategory}
        />
      )}
      <span
        onClick={() =>
          dispatch({
            type: COMPLETE_TODO,
            payload: { id, completed: !completed },
          })
        }
      >
        {title}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: REMOVE_TODO,
            payload: { id },
          })
        }
      >
        Delete
      </button>
    </div>
  )
}
export default Todo
