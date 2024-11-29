import PropTypes from 'prop-types'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext.js'

export function CreateComment({ setComments, addOptimisticComment }) {
  const [username] = useContext(UserContext)

  async function submitAction(formData) {
    const content = formData.get('content')
    const comment = {
      author: username,
      content,
    }
    addOptimisticComment(comment)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setComments((prev) => [...prev, comment])
  }

  return (
    <form action={submitAction}>
      <input type='text' name='content' />
      <i> ~ {username}</i> <input type='submit' value='Create' />
    </form>
  )
}

CreateComment.propTypes = {
  setComments: PropTypes.func.isRequired,
  addOptimisticComment: PropTypes.func.isRequired,
}
