import { PropTypes } from 'prop-types'

export function CreatePost({ username, posts, setPosts }) {
  function handleSubmit(e) {
    e.preventDefault()
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
    const post = { title, content, author: username }
    setPosts([post, ...posts])
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
  username: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
}
