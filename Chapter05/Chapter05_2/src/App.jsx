import { useState, useReducer } from 'react'
import { postsReducer } from './reducers.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { PostList } from './components/post/PostList.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'

const featuredPosts = [
  {
    title: 'React Context',
    content: 'Manage global state with ease!',
    author: 'Daniel Bugl',
  },
]

const defaultPosts = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
]

export function App() {
  const [posts, dispatch] = useReducer(postsReducer, defaultPosts)
  const [username, setUsername] = useState('')
  return (
    <ThemeContext value={{ primaryColor: 'black' }}>
      <div style={{ padding: 8 }}>
        <UserBar username={username} setUsername={setUsername} />
        <br />
        {username && <CreatePost username={username} dispatch={dispatch} />}
        <hr />
        <ThemeContext value={{ primaryColor: 'salmon' }}>
          <PostList posts={featuredPosts} />
        </ThemeContext>
        <PostList posts={posts} />
      </div>
    </ThemeContext>
  )
}
