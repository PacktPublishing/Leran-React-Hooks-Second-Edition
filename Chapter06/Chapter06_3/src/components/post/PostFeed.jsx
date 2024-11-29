import { PropTypes } from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import { PostList } from './PostList.jsx'
import { fetchPosts } from '@/api.js'

export function PostFeed({ featured = false }) {
  const { data, isLoading } = useQuery({
    queryKey: ['posts', featured],
    queryFn: async () => await fetchPosts({ featured }),
  })

  if (isLoading) {
    return <div>Loading posts...</div>
  }

  if (!data) {
    return <div>Could not load posts!</div>
  }

  return <PostList posts={data} />
}

PostFeed.propTypes = {
  featured: PropTypes.boolean,
}
