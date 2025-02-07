import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Routes, Route } from 'react-router'
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query'
import { queryClient } from './api.js'
import { NavBarLink } from './components/NavBarLink.jsx'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'
import { FetchErrorNotice } from './FetchErrorNotice.jsx'
import { Home } from './pages/Home.jsx'
import { Demo } from './pages/Demo.jsx'
import { ViewPost } from './pages/ViewPost.jsx'
import { Search } from './pages/Search.jsx'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext value={[username, setUsername]}>
        <ThemeContext value={{ primaryColor: 'black' }}>
          <BrowserRouter>
            <div style={{ padding: 8 }}>
              <NavBarLink to='/'>Home</NavBarLink>
              {' | '}
              <NavBarLink to='/search'>Search</NavBarLink>
              {' | '}
              <NavBarLink to='/demo'>Demo</NavBarLink>
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
                      <Route path='demo' element={<Demo />} />
                      <Route path='search' element={<Search />} />
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
