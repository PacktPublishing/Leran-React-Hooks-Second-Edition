import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Routes, Route } from 'react-router'
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query'
import { queryClient } from './api.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'
import { FetchErrorNotice } from './FetchErrorNotice.jsx'
import { Home } from './pages/Home.jsx'

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
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={FetchErrorNotice}
                >
                  <BrowserRouter>
                    <Routes>
                      <Route index element={<Home />} />
                    </Routes>
                  </BrowserRouter>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
        </ThemeContext>
      </UserContext>
    </QueryClientProvider>
  )
}
