import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
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
import { ViewPost } from './pages/ViewPost.jsx'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext value={[username, setUsername]}>
        <ThemeContext value={{ primaryColor: 'black' }}>
          <BrowserRouter>
            <div style={{ padding: 8 }}>
              <NavLink
                to='/'
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Home
              </NavLink>
              <hr />
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
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path='post/:id' element={<ViewPost />} />
                    </Routes>
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </div>
          </BrowserRouter>
        </ThemeContext>
      </UserContext>
    </QueryClientProvider>
  )
}
