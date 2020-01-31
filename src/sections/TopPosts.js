import React from 'react'
import PostCarousel from '../components/PostCarousel'
import PostCard from '../components/PostCard'

export default function TopPosts() {
  return (
    <section className="section">
      <style>
        {`
          
        `}
      </style>
      <div className="py-4">
        <h3 className="center">🏆 Top Posts</h3>
        <PostCarousel>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </PostCarousel>
      </div>
    </section>
  )
}