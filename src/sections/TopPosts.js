import React from 'react'
import PostCarousel from '../components/PostCarousel'
import PostCard from '../components/PostCard'
import { useStaticQuery, graphql } from 'gatsby'

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
            posts.map((x, i) => <PostCard
              key={i}
              title={x.node.frontmatter.title}
              image={x.node.frontmatter.featuredImage.childImageSharp.fluid.src || ''}
              content={x.node.excerpt}
              path={x.node.frontmatter.path}
            />)
          }
        </PostCarousel>
      </div>
    </section>
  )
}

export default TopPosts