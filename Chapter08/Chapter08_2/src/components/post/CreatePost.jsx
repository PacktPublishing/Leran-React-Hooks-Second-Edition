import { useContext, useActionState } from 'react'
import { useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { createPost, queryClient } from '@/api.js'
import { UserContext } from '@/contexts/UserContext.js'

export function CreatePost() {
  const [username] = useContext(UserContext)
  const navigate = useNavigate()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  const [error, submitAction, isPending] = useActionState(
    async (currentState, formData) => {
      const title = formData.get('title')
      const content = formData.get('content')
      const post = { title, content, author: username, featured: false }
      try {
        const result = await createPostMutation.mutateAsync(post)
        navigate(`/post/${result.id}`)
      } catch (err) {
        return err
      }
    },
  )

  return (
    <form action={submitAction}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='title' id='create-title' />
      </div>
      <textarea name='content' />
      <input type='submit' value='Create' disabled={isPending} />
      {error && <div style={{ color: 'red' }}>{error.toString()}</div>}
    </form>
  )
}
