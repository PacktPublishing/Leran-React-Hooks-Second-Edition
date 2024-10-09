import { PropTypes } from 'prop-types'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar({ username, setUsername }) {
  if (username) {
    return <Logout username={username} setUsername={setUsername} />
  } else {
    return (
      <>
        <Login setUsername={setUsername} />
        <hr />
        <Register setUsername={setUsername} />
      </>
    )
  }
}

UserBar.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
}
