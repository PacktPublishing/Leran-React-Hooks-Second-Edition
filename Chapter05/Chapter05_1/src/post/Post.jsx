import { PropTypes } from 'prop-types'

export function Post({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
