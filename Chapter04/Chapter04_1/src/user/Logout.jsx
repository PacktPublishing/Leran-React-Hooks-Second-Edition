import { PropTypes } from 'prop-types'

export function Logout({ username, onLogout }) {
  function handleSubmit(e) {
    e.preventDefault()
    onLogout()
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}

Logout.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
}
