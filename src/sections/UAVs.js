import React from 'react'
import PostCarousel from '../components/PostCarousel'
import droneIcon from '../images/ar.webp';
import { Button } from 'reactstrap';
import { Link, useStaticQuery, graphql } from 'gatsby';
import mapPosts from '../utils/mapPosts';

const UAVs = () => {
  const data = useStaticQuery(graphql`
    query UAVsQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {category: {eq: "uavs"}}}) {
        edges {
          node {
            excerpt(pruneLength: 70)
            frontmatter {
              title
              path
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges;

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
          {
            mapPosts(posts)
          }
        </PostCarousel>
        <Link to="/uavs" className="center mt-3"><Button outline color="primary">All UAV posts</Button></Link>
      </div>
    </section>
  )
}
export default UAVs;