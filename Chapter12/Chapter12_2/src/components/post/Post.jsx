import { useSuspenseQuery } from '@tanstack/react-query'
import { CommentSection } from '@/components/comment/CommentSection.jsx'
import { fetchPost } from '@/api.js'
import { useTheme } from '@/hooks/theme.js'
import { CopyLink } from './CopyLink.jsx'

export function Post({ id }) {
  const { data } = useSuspenseQuery({
    queryKey: ['post', id],
    queryFn: async () => await fetchPost({ id }),
  })
  const { title, content, author } = data

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
