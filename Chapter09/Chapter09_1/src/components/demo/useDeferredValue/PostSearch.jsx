import { useState, Suspense, useDeferredValue } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PostList } from '@/components/post/PostList.jsx'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function searchPosts(query) {
  const res = await fetch('/api/posts')
  const posts = await res.json()
  const filteredPosts = posts.filter((post) => {
    const title = post.title.toLowerCase()
    return title.includes(query.toLowerCase())
  })
  await sleep(1000)
  return filteredPosts
}

function SearchResults({ query }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', query],
    queryFn: async () => await searchPosts(query),
  })
  return <PostList posts={data} />
}

export function PostSearch() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  return (
    <div>
      <h3>PostSearch</h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Suspense fallback={<h4>loading...</h4>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </div>
  )
}
