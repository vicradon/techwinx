import React from 'react';
import vrEmoji from '../images/vr-emoji.webp';
import PostCard from '../components/PostCard';
import PostCarousel from '../components/PostCarousel';

const MR = () => {
   return (
    <section className="section">
      <style>
        {`
          .vr-emoji {
            width:40px;
            margin-right:0.5rem;
          }
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><img className = "vr-emoji" src = {vrEmoji} alt = "vr emoji" /> Mixed Reality</h3>
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

export default MR;