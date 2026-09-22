import React from 'react'
import Post from '../components/Post'

//TODO: static Data instead of faching from an API
const blogsData = [
  {
    id: 1,
    title: 'How APIs Connect Frontend and Backend',
    author: 'Ibrahim Khalil',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    description:
      'APIs help frontend applications communicate with backend servers and exchange data.',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Getting Started with React',
    author: 'John Smith',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    description:
      'React is a popular JavaScript library for building modern and interactive user interfaces.',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Why TypeScript Is Useful',
    author: 'Sarah Ahmed',
    category: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    description:
      'TypeScript adds static typing to JavaScript and helps developers write safer and more maintainable code.',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Understanding JavaScript Functions',
    author: 'Michael Brown',
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    description:
      'Functions are one of the most important building blocks of JavaScript applications.',
    readTime: '4 min read'
  },
  {
    id: 5,
    title: 'Building Responsive Websites with Tailwind CSS',
    author: 'Nadia Rahman',
    category: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    description:
      'Tailwind CSS provides utility classes that make it easier to create responsive and modern web interfaces.',
    readTime: '8 min read'
  }
]

const BlogsPage = () => {
  return (
    <div>
      <h2>Our Blog Page</h2>
      {
      blogsData.map(post => ( <Post key={post.id} post={post}></Post> ))
      }
    </div>
  )
}

export default BlogsPage
