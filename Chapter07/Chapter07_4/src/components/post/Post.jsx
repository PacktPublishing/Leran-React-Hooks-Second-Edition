import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext.js'
import { CommentSection } from '@/components/comment/CommentSection.jsx'

export function Post({ id, title, content, author }) {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <h3 style={{ color: theme.primaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br />
      <br />
      <CommentSection postId={id} />
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
