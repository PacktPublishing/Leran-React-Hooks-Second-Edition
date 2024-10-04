import { PropTypes } from 'prop-types'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar({ username, setUsername }) {
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

UserBar.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
}
