import { PropTypes } from 'prop-types'

export function Comment({ content, author, sending }) {
  return (
    <div style={{ padding: '0.5em 0', color: sending ? 'gray' : 'black' }}>
      <span>{content}</span>
      <i> ~ {author}</i>
    </div>
  )
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  sending: PropTypes.boolean,
}
