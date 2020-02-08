import React from 'react';
import vrEmoji from '../images/vr-emoji.webp';
import PostCard from '../components/PostCard';
import PostCarousel from '../components/PostCarousel';
import { Button } from 'reactstrap';
import { useStaticQuery, graphql } from "gatsby"


const MR = () => {
  const data = useStaticQuery(graphql`
    query MRQuery {
      allMarkdownRemark(limit: 4, filter: {frontmatter: {category: {eq: "mr"}}}) {
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
  // featuredImage{
  //   childImageSharp {
  //     fluid {
  //       src
  //     }
  //   }
  // }
  const posts = data.allMarkdownRemark.edges;
  
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
        <h3 className="center"><img className="vr-emoji" src={vrEmoji} alt="vr emoji" /> Mixed Reality</h3>
        <PostCarousel>
          {
            posts.map((x, i) => <PostCard key = {i} title = {x.node.frontmatter.title} content = {x.node.excerpt} path = {x.node.frontmatter.path} />)
          }
        </PostCarousel>
        <p className="center mt-3"><Button outline color="primary">All MR posts</Button></p>
      </div>
    </section>
  )
}

export default MR;