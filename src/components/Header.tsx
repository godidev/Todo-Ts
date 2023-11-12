import { useState } from 'react'
import { TodoAction, ADD_TODO } from '../types'

type Props = {
  dispatch: React.Dispatch<TodoAction>
}

function Header({ dispatch }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.length !== 0) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: inputValue,
        completed: false,
        category: null,
      }
      dispatch({ type: ADD_TODO, payload: { newTodo } })
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
