import React from 'react';
import PostCarousel from '../components/PostCarousel';
import PostCard from '../components/PostCard';
import { Button } from 'reactstrap';
import { useStaticQuery, graphql } from "gatsby"


const AI = () => {
  const data = useStaticQuery(graphql`
    query AIQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {category: {eq: "ai"}}}) {
        edges {
          node {
            excerpt(pruneLength: 70)
            frontmatter {
              title
              featuredImage
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
            posts.map((x, i) => <PostCard title={x.node.frontmatter.title} image = {x.node.frontmatter.featuredImage} content={x.node.excerpt} />)
          }
        </PostCarousel>
        <p className="center mt-3"><Button outline color="primary">All AI posts</Button></p>
      </div>
    </section>
  )
}

export default AI;