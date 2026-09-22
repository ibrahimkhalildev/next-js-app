import Link from 'next/link'
import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const user = await res.json()

  return (
    <div>
      <h2>User Page: {user.length}</h2>
      <div className='grid grid-cols-4 gap-4'>
        {user.map(user => (
          <div key={user.id} className='card bg-base-100 card-xs shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title'>{user.name}</h2>
              <p>{user.company.name}</p>
              <div className='justify-end card-actions'>
                <Link href={`/users/${user.id}`}>
                  <button className='btn btn-primary'>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
