import { useLocalStorage } from '@uidotdev/usehooks'

export function Logout() {
  const [username, setUsername] = useLocalStorage('username', null)

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
