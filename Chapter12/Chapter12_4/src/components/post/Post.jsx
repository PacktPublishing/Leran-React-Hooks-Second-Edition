import { CommentSection } from '@/components/comment/CommentSection.jsx'
import { useTheme } from '@/hooks/theme.js'
import { useAPIFetchPost } from '@/hooks/api.js'
import { CopyLink } from './CopyLink.jsx'

export function Post({ id }) {
  const { title, content, author } = useAPIFetchPost({ id })
  const theme = useTheme()

  return (
    <div>
      <h3 style={{ color: theme.primaryColor }}>
        {title} <CopyLink url={window.location.href} />
      </h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br />
      <br />
      <CommentSection />
    </div>
  )
}
