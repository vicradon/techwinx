import React from 'react';
import PostCarousel from '../components/PostCarousel';
import { Button } from 'reactstrap';
import { Link, useStaticQuery, graphql } from 'gatsby';
import mapPosts from '../utils/mapPosts';

const Tefrica = () => {
  const data = useStaticQuery(graphql`
    query TefricaQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {category: {eq: "tefrica"}}}) {
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
        <h3 className="center"><span aria-label="jsx-a11y" role="img">🌍</span> Tefrica</h3>
        <PostCarousel>
          {
            mapPosts(posts)
          }
        </PostCarousel>
        <Link to="/tefrica" className="center mt-3"><Button outline color="primary">All Tefrica posts</Button></Link>
      </div>
    </section>
  )
}

export default Tefrica;