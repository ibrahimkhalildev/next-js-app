import Link from 'next/link'
import React from 'react'

const PostPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h2>Post Page: {posts.length}</h2>
      <div className='grid grid-cols-4 gap-4'>
        {posts.map(post => (
          <div
            key={post.id}
            className='card w-96 bg-base-100 card-md shadow-sm'
          >
            <div className='card-body'>
              <h2 className='card-title'>{post.title}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className='justify-end card-actions'>
                <Link href={`./posts/${post.id}`}>
                  {' '}
                  <button className='btn btn-primary'>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostPage
