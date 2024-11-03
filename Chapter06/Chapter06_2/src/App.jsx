import { useState, useReducer, useEffect } from 'react'
import { postsReducer } from './reducers.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { PostList } from './components/post/PostList.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'

export function App() {
  const [posts, dispatch] = useReducer(postsReducer, [])
  const [username, setUsername] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts')
      const posts = await response.json()
      dispatch({ type: 'FETCH_POSTS', posts })
    }
    fetchPosts()
  }, [])

  const featuredPosts = posts.filter((post) => post.featured).reverse()
  const regularPosts = posts.filter((post) => !post.featured).reverse()

  return (
    <UserContext value={[username, setUsername]}>
      <ThemeContext value={{ primaryColor: 'black' }}>
        <div style={{ padding: 8 }}>
          <UserBar />
          <br />
          {username && <CreatePost dispatch={dispatch} />}
          <hr />
          <ThemeContext value={{ primaryColor: 'salmon' }}>
            <PostList posts={featuredPosts} />
          </ThemeContext>
          <PostList posts={regularPosts} />
        </div>
      </ThemeContext>
    </UserContext>
  )
}
