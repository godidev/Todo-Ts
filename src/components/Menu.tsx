import { useState } from 'react'
import {
  CHANGE_CATEGORY,
  type TodoAction,
  type TodoCategory,
  type TodoId,
} from '../types'

type Props = {
  id: TodoId
  category: TodoCategory
  dispatch: React.Dispatch<TodoAction>
  categories: string[]
  addCategory: (cat: string) => void
}

const Menu: React.FC<Props> = ({
  dispatch,
  category,
  categories,
  id,
  addCategory,
}) => {
  const [inputValue, setInputValue] = useState('')
  return category === null ? null : (
    <div className='menu-box'>
      <label>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => addCategory(inputValue)}>Add</button>
      </label>
      <ul>
        {categories.map((cat) => (
          <li
            onClick={() =>
              dispatch({
                type: CHANGE_CATEGORY,
                payload: { id, category: cat },
              })
            }
            style={{ backgroundColor: cat === category ? 'green' : '' }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
