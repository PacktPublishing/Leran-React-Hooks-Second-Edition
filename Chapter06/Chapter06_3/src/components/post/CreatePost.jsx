import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createPost, queryClient } from '@/api.js'
import { UserContext } from '@/contexts/UserContext.js'

export function CreatePost() {
  const [username] = useContext(UserContext)

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  async function handleSubmit(e) {
    e.preventDefault()

    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
    const post = { title, content, author: username, featured: false }

    createPostMutation.mutate(post, { onSuccess: () => e.target.reset() })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='title' id='create-title' />
      </div>
      <textarea name='content' />
      <input
        type='submit'
        value='Create'
        disabled={createPostMutation.isPending}
      />
      {createPostMutation.isError && (
        <div style={{ color: 'red' }}>
          {createPostMutation.error.toString()}
        </div>
      )}
    </form>
  )
}
