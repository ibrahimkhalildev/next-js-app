import Link from 'next/link'
import React from 'react'

const CommentsPage = async () => {
  // fetching data from API
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments = await res.json()
  console.log(comments.id)
  return (
    <div>
      <h2 className='font-bold text-blue-950 text-3xl'>All Comments Page:</h2>
      <h2 className='font-bold text-red-800 text-2xl'>
        Total Comments: {comments.length}
      </h2>
      {/*All Comments Cards  MAP*/}
      <div className='grid grid-cols-4 gap-4'>
        {comments.map(comment => (
          <div key={comments.id} className='card card-border bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title'>{comment.name}</h2>
              <p>
                {comment.body}
              </p>
              <div className='card-actions justify-end'>
                <Link href={`/comments/${comment.id}`}><button className='btn btn-primary'>View Comment</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsPage
