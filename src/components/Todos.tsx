import { ListOfTodos, TodoId } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  handleDelete: ({ id }: TodoId) => void
  handleComplete: ({
    id,
    completed,
  }: {
    id: string
    completed: boolean
  }) => void
}

const Todos: React.FC<Props> = ({ todos, handleDelete, handleComplete }) => {
  return (
    <div>
      {todos.map(({ id, title, completed }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          completed={completed}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  )
}
export default Todos
