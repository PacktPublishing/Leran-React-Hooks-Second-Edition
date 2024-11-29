import { PropTypes } from 'prop-types'

export function Comment({ content, author }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return (
    <div style={{ padding: '0.5em 0' }}>
      <span>{content}</span>
      <i> ~ {author}</i>
    </div>
  )
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
