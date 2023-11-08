import { useState } from 'react'
import { type Todo } from '../types'

type Props = {
  handleSubmit: (newTodo: Todo) => void
}

function Header({ handleSubmit }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.length !== 0) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: inputValue,
        completed: false,
      }
      handleSubmit(newTodo)
      setInputValue('')
    }
  }

  return (
    <header>
      <form onSubmit={handleForm}>
        <input
          placeholder='Make a cake...'
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </header>
  )
}
export default Header
