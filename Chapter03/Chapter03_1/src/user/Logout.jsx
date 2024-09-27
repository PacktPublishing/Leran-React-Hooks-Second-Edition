import { PropTypes } from 'prop-types'

export function Logout({ username }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}

Logout.propTypes = {
  username: PropTypes.string.isRequired,
}
