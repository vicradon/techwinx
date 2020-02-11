import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Row, Col } from 'reactstrap'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <Layout>
      <style>
        {`
          .markdown-content p {
            font-size:20px;
          }
          .blog-container {
          }
          .post-header {
            display:flex;
            justify-content:center;
            align-items:center;
            flex-flow:column wrap;
            margin: 3rem 0;
          }
          .post-heading {
            color:var(--blue);
            font-size:3.7em;
            font-family: Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, 'Open Sans', FreeSans, sans-serif;
          }
          .post-tags {
            color:var(--red);
            cursor:pointer;
          }
          .post-author {
            border:1px solid var(--pink);
            color: var(--red);
            padding: 0.3rem;
            border-radius:0.3rem;
            cursor:pointer;
          }
          blockquote {
            margin-bottom: 1em;
            margin-top: 1.9em;
            border-left: 4px solid var(--orange);
            padding-left: .8em;
            text-align: justify;
            font-style:italic;
          }
          .post-last-edit {
            border-top:3px solid var(--orange);
            width:220px;
          }
          .more-section {
            margin-top:10rem;
            background-color:whitesmoke;
            padding:1rem 0.5rem;
          } 
          .more-section h3 {
            color:var(--orange);
          }
          .more-section a {
            font-size:1.2em;
            color: lightblue;
            cursor: pointer;
          }
          @media(max-width:450px){
            .markdown-content p {
              font-size:15px;
            }
            .post-heading {
              font-size:2em;
            }
            .more-section {
              margin-top:1rem;

            }
          }
      `}
      </style>

      <div className="container pt-4">
        <div className="post-header">
          <span className="post-tags">{post.frontmatter.tags.map(x => `#${x}${" "}`)}</span>
          <h1 className="post-heading">{post.frontmatter.title}</h1>
          <span className="post-author">{post.frontmatter.author} </span>
        </div>

        <Row>
          <Col xl="9" l="12">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <p className="post-last-edit">Last edited {post.frontmatter.date}</p>
          </Col>
          <Col xl="3" l="12">
            <div className="more-section center-column">
              <h3>More {post.frontmatter.category_name}</h3>
              <a>Dummy Stuff</a>
              <p>More</p>
            </div>
          </Col>
        </Row>

      </div>

    </Layout>
  )
}

// BlogPost.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        category
        category_name
        author
      }
    }
  }

  
`

// query MorePosts($category: String!){
//   allMarkdownRemark(limit: 5, filter: {frontmatter: {category: {eq: $category}}}) {
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//         }
//       }
//     }
//   }
// }