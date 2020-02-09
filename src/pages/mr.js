import React from 'react';
import PostCard from '../components/PostCard';
import { graphql } from "gatsby"
// import Layout from '../components/Layout';
import PostsContainer from '../components/PostsContainer';

const MRCategory = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <PostsContainer name = "Mixed Reality">
      <style>
        {`
        
      `}
      </style>
      {
        posts.map((x, i) => {
          let a = '';
          x.node.frontmatter.featuredImage ? a = x.node.frontmatter.featuredImage.childImageSharp.fluid.src : a = ''
          return <PostCard
            key={i}
            title={x.node.frontmatter.title}
            image={a}
            content={x.node.excerpt}
            path={x.node.frontmatter.path}
          />
        })
      }
    </PostsContainer>
  )
}

export const query = graphql`
{
  allMarkdownRemark(limit: 20, filter: {frontmatter: {category: {eq: "mr"}}}) {
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
`

export default MRCategory;