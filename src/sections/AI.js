import React from 'react';
import PostCarousel from '../components/PostCarousel';
import PostCard from '../components/PostCard';
import { Button } from 'reactstrap';
import { useStaticQuery, graphql, Link } from "gatsby"
import mapPosts from '../utils/mapPosts';


const AI = () => {
  const data = useStaticQuery(graphql`
    query AIQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {category: {eq: "ai"}}}) {
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
           
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><span aria-label="jsx-a11y" role="img">🤖</span> AI</h3>
        <PostCarousel>
          {
            mapPosts(posts)
          }
        </PostCarousel>
        <Link to = "/ai" className="center mt-3"><Button outline color="primary">All AI posts</Button></Link>
      </div>
    </section>
  )
}

export default AI;