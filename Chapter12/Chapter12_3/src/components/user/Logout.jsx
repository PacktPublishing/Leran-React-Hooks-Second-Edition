import { useUser } from '@/hooks/user.js'

export function Logout() {
  const { username, logout } = useUser()

  function handleSubmit(e) {
    e.preventDefault()
    logout()
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}
