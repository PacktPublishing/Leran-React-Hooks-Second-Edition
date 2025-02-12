import { PropTypes } from 'prop-types'
import { useAPIFetchPosts } from '@/hooks/api.js'
import { PostList } from './PostList.jsx'

export function PostFeed({ featured = false }) {
  const posts = useAPIFetchPosts({ featured })
  return <PostList posts={posts} />
}

PostFeed.propTypes = {
  featured: PropTypes.boolean,
}
