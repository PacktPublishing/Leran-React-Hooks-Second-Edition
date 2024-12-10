import { useSuspenseQuery } from '@tanstack/react-query'
import { CommentSection } from '@/components/comment/CommentSection.jsx'
import { fetchPost } from '@/api.js'

export function Post({ id }) {
  const { data } = useSuspenseQuery({
    queryKey: ['post', id],
    queryFn: async () => await fetchPost({ id }),
  })
  const { title, content, author } = data

  return (
    <div>
      <h3>{title}</h3>
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
