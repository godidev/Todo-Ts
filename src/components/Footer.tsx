import { filterSel } from '../consts'
import { filterValue } from '../types'

type Props = {
  handleChangeFilter: (id: filterValue) => void
  completedSum: number
}

function Footer({ handleChangeFilter, completedSum }: Props): JSX.Element {
  return (
    <footer>
      <div className='footer-buttons'>
        {Object.entries(filterSel).map(([key, value]) => {
          return (
            <button key={key} onClick={() => handleChangeFilter(value)}>
              {key}
            </button>
          )
        })}
      </div>
      <div>
        <span>{completedSum} ToDos completed</span>
      </div>
    </footer>
  )
}
export default Footer
