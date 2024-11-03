import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext.js'

export function CreatePost({ dispatch }) {
  const [username] = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
    const post = { title, content, author: username }
    dispatch({ type: 'CREATE_POST', post })
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='title' id='create-title' />
      </div>
      <textarea name='content' />
      <input type='submit' value='Create' />
    </form>
  )
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
