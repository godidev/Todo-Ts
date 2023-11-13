import { filterSel } from '../consts'
import { DELETE_COMPLETED, SET_FILTER, type TodoAction } from '../types'

type Props = {
  dispatch: React.Dispatch<TodoAction>
  completedSum: number
}

function Footer({ dispatch, completedSum }: Props): JSX.Element {
  return (
    <footer>
      <div className='footer-buttons'>
        {Object.entries(filterSel).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() =>
                dispatch({ type: SET_FILTER, payload: { filter: value } })
              }
            >
              {key}
            </button>
          )
        })}
      </div>
      <div>
        <span>{completedSum} ToDos completed</span>
        <button onClick={() => dispatch({ type: DELETE_COMPLETED })}>
          Delete completed
        </button>
      </div>
    </footer>
  )
}
export default Footer
