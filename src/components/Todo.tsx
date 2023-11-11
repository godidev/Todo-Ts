import { useState } from 'react'
import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  handleDelete: (id: TodoId) => void
  handleComplete: ({
    id,
    completed,
  }: {
    id: string
    completed: boolean
  }) => void
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleDelete,
  handleComplete,
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
      {showMenu && <Menu />}
      <span onClick={() => handleComplete({ id, completed: !completed })}>
        {title}
      </span>
      <button onClick={() => handleDelete({ id })}>Delete</button>
    </div>
  )
}
export default Todo

const Menu = () => {
  return (
    <ul>
      <li>categoria 1</li>
      <li>categoria 2</li>
    </ul>
  )
}
