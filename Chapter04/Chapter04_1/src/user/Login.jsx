import { PropTypes } from 'prop-types'

export function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    onLogin(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='login-username'>Username: </label>
      <input type='text' name='username' id='login-username' required />
      <br />
      <label htmlFor='login-password'>Password: </label>
      <input type='password' name='password' id='login-password' required />
      <br />
      <input type='submit' value='Login' />
    </form>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}
