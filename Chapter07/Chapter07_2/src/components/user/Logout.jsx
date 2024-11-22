import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

export function Logout() {
  const [username, setUsername] = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    setUsername('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}
