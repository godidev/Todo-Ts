import { REMOVE_TODO, type TodoAction, type TodoId } from '../types'

type Props = {
  dispatch: React.Dispatch<TodoAction>
  id: TodoId
}

function DeleteButton({ dispatch, id }: Props) {
  return (
    <button
      style={{ backgroundColor: '#ff7070', color: 'black' }}
      onClick={() =>
        dispatch({
          type: REMOVE_TODO,
          payload: { id },
        })
      }
    >
      Delete
    </button>
  )
}
export default DeleteButton
