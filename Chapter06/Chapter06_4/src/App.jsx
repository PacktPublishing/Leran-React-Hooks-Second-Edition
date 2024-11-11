import { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { PostFeed } from './components/post/PostFeed.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext value={[username, setUsername]}>
        <ThemeContext value={{ primaryColor: 'black' }}>
          <div style={{ padding: 8 }}>
            <UserBar />
            <br />
            {username && <CreatePost />}
            <hr />
            <ThemeContext value={{ primaryColor: 'salmon' }}>
              <PostFeed featured />
            </ThemeContext>
            <PostFeed />
          </div>
        </ThemeContext>
      </UserContext>
    </QueryClientProvider>
  )
}
