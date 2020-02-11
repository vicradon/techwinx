import React from 'react'
import PostCarousel from '../components/PostCarousel'
import PostCard from '../components/PostCard'
import droneIcon from '../images/ar.webp';
import { Button } from 'reactstrap';
import { Link } from 'gatsby';

const UAVs = () => {
  return (
    <section className="section">
      <style>
        {`
          .drone-icon {
            width:40px;
            margin-right:0.5rem;
          }
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><img className="drone-icon" src={droneIcon} alt="drone icon" /> UAVs</h3>
        <PostCarousel>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostCarousel>
        <Link to = "/uavs" className = "center mt-3"><Button outline color = "primary">All UAV posts</Button></Link>
      </div>
    </section>
  )
}
export default UAVs;