import React from 'react'

const DetailCommentPage = async ({ params }) => {
  const { commentId } = await params
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`
  )
  const comment = await res.json()

  return (
    <div className='container mx-auto'>
      <p className='text-blue-600'>
        URL: https://jsonplaceholder.typicode.com/comments/{commentId}
      </p>
      <h2 className='font-bold text-black'>
        Full Comment:
        <span className='text-yellow-700'> {comment.body}</span>
      </h2>
      <h2 className='font-bold text-black'>
        User Name:
        <span className='text-yellow-700'> {comment.name}</span>
      </h2>
      <h2 className='font-bold text-black'>
        User Mail:
        <span className='text-yellow-700'> {comment.email}</span>
      </h2>
    </div>
  )
}

export default DetailCommentPage
