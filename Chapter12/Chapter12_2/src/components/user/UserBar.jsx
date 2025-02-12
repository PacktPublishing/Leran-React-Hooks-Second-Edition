import { useUser } from '@/hooks/user.js'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar() {
  const { isLoggedIn } = useUser()
  if (isLoggedIn) {
    return <Logout />
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
