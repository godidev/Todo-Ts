import { filterSel } from '../consts'
import {
  DELETE_COMPLETED,
  SET_FILTER,
  filterValue,
  type TodoAction,
} from '../types'

type Props = {
  dispatch: React.Dispatch<TodoAction>
  completedSum: number
  filter: filterValue
}

function Footer({ dispatch, completedSum, filter }: Props): JSX.Element {
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
              className={value === filter ? 'selected' : ''}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span>{completedSum} ToDos completed</span>
        <button onClick={() => dispatch({ type: DELETE_COMPLETED })}>
          Delete completed
        </button>
      </div>
    </footer>
  )
}
export default Footer
