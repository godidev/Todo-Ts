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
  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#4c4c4c' : '#242424',
  }
  return (
    <div style={styles} className='todo-item'>
      <span onClick={() => handleComplete({ id, completed: !completed })}>
        {title}
      </span>
      <button onClick={() => handleDelete({ id })}>Delete</button>
    </div>
  )
}
export default Todo
