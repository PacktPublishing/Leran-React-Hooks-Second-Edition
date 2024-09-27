import { useState } from 'react'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar() {
  const [username, setUsername] = useState('')
  if (username) {
    return <Logout username={username} onLogout={() => setUsername('')} />
  } else {
    return (
      <>
        <Login onLogin={(username) => setUsername(username)} />
        <hr />
        <Register onRegister={(username) => setUsername(username)} />
      </>
    )
  }
}
