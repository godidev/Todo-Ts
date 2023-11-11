import { useState } from 'react'
import { TodoCategory, TodoId } from '../types'

type Props = {
  id: TodoId
  category: TodoCategory
  handleCategoryChange: ({
    id,
    category,
  }: {
    id: TodoId
    category: TodoCategory
  }) => void
  categories: string[]
  addCategory: (cat: string) => void
}

const Menu: React.FC<Props> = ({
  handleCategoryChange,
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
            onClick={() => handleCategoryChange({ id, category: cat })}
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
