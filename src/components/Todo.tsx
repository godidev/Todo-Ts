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
  }
  return (
    <div style={styles}>
      <span onClick={() => handleComplete({ id, completed: !completed })}>
        {title}
      </span>
      <button onClick={() => handleDelete({ id })}>Delete</button>
    </div>
  )
}
export default Todo
