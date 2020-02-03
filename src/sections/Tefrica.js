import React from 'react';
import PostCard from '../components/PostCard';
import PostCarousel from '../components/PostCarousel';

const Tefrica = () => {
   return (
    <section className="section">
      <style>
        {`
          
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><span aria-label = "jsx-a11y" role = "img">🌍</span> Tefrica</h3>
        <PostCarousel>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard />
        </PostCarousel>
      </div>
    </section>
  )
}

export default Tefrica;