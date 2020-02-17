import React from 'react'
import PostCarousel from '../components/PostCarousel'
import { useStaticQuery, graphql } from 'gatsby'
import mapPosts from '../utils/mapPosts'

const TopPosts = () => {
  const data = useStaticQuery(graphql`
    query TopPostsQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {featured: {eq: true}}}) {
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
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <section className="section">
      <style>
        {`
          
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><span aria-label="jsx-a11y" role="img">🏆</span> Top Posts</h3>
        <PostCarousel>
          {
            mapPosts(posts)
          }
        </PostCarousel>
      </div>
    </section>
  )
}

export default TopPosts