import React from 'react'

const PostDetailPage = async ({ params }) => {
  const { postId } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post = await res.json()
  return (
    <div className=''>
      <h2>Post Detail Papge:</h2>
      <h2>Post ID: {post.id}</h2>
      <p>Post Title: {post.title}</p>
    </div>
  )
}

export default PostDetailPage
