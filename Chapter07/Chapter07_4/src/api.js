import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export async function fetchPosts({ featured }) {
  const res = await fetch(`/api/posts?featured=${featured}`)
  return await res.json()
}

export async function createPost(post) {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  if (!res.ok) {
    throw new Error('Unable to create post')
  }
  return await res.json()
}

export async function fetchComments({ postId }) {
  const res = await fetch(`/api/comments?postId=${postId}`)
  return await res.json()
}

export async function createComment(comment) {
  const res = await fetch(`/api/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  })
  if (!res.ok) {
    throw new Error('Unable to create comment')
  }
  return await res.json()
}
