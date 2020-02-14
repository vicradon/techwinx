import React from 'react';
import vrEmoji from '../images/vr-emoji.webp';
import PostCard from '../components/PostCard';
import PostCarousel from '../components/PostCarousel';
import { Button } from 'reactstrap';
import { useStaticQuery, graphql, Link } from "gatsby"
import mapPosts from '../utils/mapPosts';


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
            mapPosts(posts)
          }
        </PostCarousel>
        <Link to = "/mr" className="center mt-3"><Button outline color="primary">All MR posts</Button></Link>
      </div>
    </section>
  )
}

export default MR;