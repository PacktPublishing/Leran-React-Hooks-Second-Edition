import { Fragment } from 'react'
import { PostListItem } from './PostListItem.jsx'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post.id}>
          <PostListItem {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}
