import { filterSel } from '../consts'
import { filterValue } from '../types'

type Props = {
  handleChangeFilter: (id: filterValue) => void
}

function Footer({ handleChangeFilter }: Props): JSX.Element {
  return (
    <div>
      {Object.entries(filterSel).map(([key, value]) => {
        return (
          <button key={key} onClick={() => handleChangeFilter(value)}>
            {key}
          </button>
        )
      })}
    </div>
  )
}
export default Footer
