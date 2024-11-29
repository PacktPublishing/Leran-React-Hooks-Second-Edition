import PropTypes from 'prop-types'
import { useContext, useActionState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createComment, queryClient } from '@/api.js'
import { UserContext } from '@/contexts/UserContext.js'

export function CreateComment({ postId, addOptimisticComment }) {
  const [username] = useContext(UserContext)

  const createCommentMutation = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId])
    },
  })

  const [error, submitAction, isPending] = useActionState(
    async (currentState, formData) => {
      const content = formData.get('content')
      const post = { content, author: username }
      addOptimisticComment(post)
      try {
        await createCommentMutation.mutateAsync(post)
      } catch (err) {
        return err
      }
    },
  )

  return (
    <form action={submitAction}>
      <input type='text' name='content' />
      <i> ~ {username}</i>{' '}
      <input type='submit' value='Create' disabled={isPending} />
      {error && <div style={{ color: 'red' }}>{error.toString()}</div>}
    </form>
  )
}

CreateComment.propTypes = {
  postId: PropTypes.string.isRequired,
  addOptimisticComment: PropTypes.func.isRequired,
}
