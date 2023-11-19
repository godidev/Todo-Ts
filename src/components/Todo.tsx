import { useState } from 'react'
import {
  type Todo as TodoType,
  type TodoAction,
  COMPLETE_TODO,
  CHANGE_TODO_TITLE,
} from '../types'
import Menu from './Menu'
import EditSaveButton from './EditSaveButton'
import CategoryIcon from './Icons/CategoryIcon'
import DeleteIcon from './Icons/DeleteIcon'

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
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
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

  const handleEditchange = () => {
    setIsEditing((prevEdit) => !prevEdit)
  }

  const handleSave = () => {
    if (newTitle === title || newTitle === '') return
    dispatch({ type: CHANGE_TODO_TITLE, payload: { id, newTitle } })
  }
  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#4c4c4c' : '#242424',
  }
  return (
    <div style={styles} className='todo-item'>
      {showMenu && (
        <Menu
          id={id}
          categories={categories}
          category={category}
          dispatch={dispatch}
          addCategory={addCategory}
        />
      )}
      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type='text'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </form>
      ) : (
        <>
          <CategoryIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
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
        </>
      )}
      <div className='todo-buttons'>
        <DeleteIcon dispatch={dispatch} id={id} />
        <EditSaveButton
          isEditing={isEditing}
          handleEditchange={handleEditchange}
          handleSave={handleSave}
        />
      </div>
    </div>
  )
}
export default Todo
