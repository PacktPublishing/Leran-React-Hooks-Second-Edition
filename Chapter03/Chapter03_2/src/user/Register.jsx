import { PropTypes } from 'prop-types'

export function Register({ onRegister }) {
  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    onRegister(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='register-username'>Username: </label>
      <input type='text' name='username' id='register-username' />
      <br />
      <label htmlFor='register-password'>Password: </label>
      <input type='password' name='password' id='register-password' />
      <br />
      <label htmlFor='register-password-repeat'>Repeat password: </label>
      <input
        type='password'
        name='password-repeat'
        id='register-password-repeat'
      />
      <br />
      <input type='submit' value='Register' />
    </form>
  )
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
}
