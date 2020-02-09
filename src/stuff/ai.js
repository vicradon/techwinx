import React from 'react';
import PostCard from '../components/PostCard';
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout';

const AICategory = () => {
  const data = useStaticQuery(graphql`
    query AICategoryQuery {
      allMarkdownRemark(limit: 20, filter: {frontmatter: {category: {eq: "ai"}}}) {
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
    <Layout>
      <section className="section">
        <style>
          {`
          
        `}
        </style>
        <div className="py-4">
          {
            posts.map((x, i) => <PostCard
              key={i}
              title={x.node.frontmatter.title}
              image={x.node.frontmatter.featuredImage.childImageSharp.fluid.src || ''}
              content={x.node.excerpt}
              path={x.node.frontmatter.path}
            />)
          }
        </div>
      </section>
    </Layout>
  )
}

export default AICategory;