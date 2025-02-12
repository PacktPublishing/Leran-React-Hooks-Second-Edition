import { useState, useOptimistic } from 'react'
import { useUser } from '@/hooks/user.js'
import { CreateComment } from './CreateComment.jsx'
import { Comment } from './Comment.jsx'

export function CommentList() {
  const { isLoggedIn } = useUser()
  const [comments, setComments] = useState([])

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, comment) => [
      ...state,
      {
        ...comment,
        sending: true,
      },
    ],
  )

  async function addComment(comment) {
    addOptimisticComment(comment)
    await new Promise((resolve) => setTimeout(resolve, 10000))
    setComments((prev) => [...prev, comment])
  }

  return (
    <div>
      {optimisticComments?.map((comment, index) => (
        <div key={index}>
          <Comment {...comment} />
        </div>
      ))}
      {optimisticComments.length === 0 && <i>No comments</i>}
      {isLoggedIn && <CreateComment addComment={addComment} />}
    </div>
  )
}
