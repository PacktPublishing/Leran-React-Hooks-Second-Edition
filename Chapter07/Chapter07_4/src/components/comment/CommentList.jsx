import PropTypes from 'prop-types'
import { useContext, useOptimistic } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchComments } from '@/api.js'
import { UserContext } from '@/contexts/UserContext.js'
import { CreateComment } from './CreateComment.jsx'
import { Comment } from './Comment.jsx'

export function CommentList({ postId }) {
  const [username] = useContext(UserContext)
  const { data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => await fetchComments({ postId }),
  })

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    data,
    (state, comment) => [
      ...state,
      {
        ...comment,
        sending: true,
      },
    ],
  )

  return (
    <div>
      {optimisticComments?.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
      {username && (
        <CreateComment
          postId={postId}
          addOptimisticComment={addOptimisticComment}
        />
      )}
    </div>
  )
}

CommentList.propTypes = {
  postId: PropTypes.string.isRequired,
}
