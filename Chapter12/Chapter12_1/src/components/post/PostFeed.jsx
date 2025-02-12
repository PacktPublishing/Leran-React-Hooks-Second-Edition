import { PropTypes } from 'prop-types'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PostList } from './PostList.jsx'
import { fetchPosts } from '@/api.js'

export function PostFeed({ featured = false }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', featured],
    queryFn: async () => await fetchPosts({ featured }),
  })

  return <PostList posts={data} />
}

PostFeed.propTypes = {
  featured: PropTypes.boolean,
}
