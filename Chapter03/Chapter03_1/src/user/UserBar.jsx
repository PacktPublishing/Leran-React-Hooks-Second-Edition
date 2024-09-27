import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar() {
  const username = 'Daniel Bugl'
  if (username) {
    return <Logout username={username} />
  } else {
    return (
      <>
        <Login />
        <hr />
        <Register />
      </>
    )
  }
}
