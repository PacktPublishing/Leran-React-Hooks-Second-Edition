import { PropTypes } from 'prop-types'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useTransition, useOptimistic } from 'react'
import { fetchPost, changePost, queryClient } from '@/api.js'

export function LikeButton({ postId }) {
  const { data } = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => await fetchPost({ postId }),
  })

  const changePostMutation = useMutation({
    mutationFn: changePost,
    onSettled: () => {
      queryClient.invalidateQueries(['post', postId])
    },
  })

  const [isPending, startTransition] = useTransition()
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(data?.likes ?? 0)

  function handleClick() {
    startTransition(async () => {
      setOptimisticLikes((prev) => prev + 1)
      try {
        await changePostMutation.mutateAsync({
          postId,
          likes: data?.likes + 1,
        })
      } catch (err) {
        console.error('Failed to like post:', err)
      }
    })
  }

  return (
    <div style={{ color: 'darkslategray' }}>
      {optimisticLikes} likes{' '}
      <button disabled={isPending} onClick={handleClick}>
        Like
      </button>
    </div>
  )
}

LikeButton.propTypes = {
  postId: PropTypes.string.isRequired,
}
