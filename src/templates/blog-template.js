import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Row, Col } from 'reactstrap'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <style>
        {`
          p {
            font-size:20px;
          }
          .blog-container {
          }
          .post-header {
            display:flex;
            justify-content:center;
            align-items:center;
            flex-flow:column wrap;
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
            border-left: 4px solid var(--blue);
            padding-left: .8em;
            text-align: justify;
            font-style:italic;
          }
      `}
      </style>

      <div className="container pt-4" fluid={true}>
        <div className="post-header">
          <span className="post-tags">{post.frontmatter.tags.map(x => `#${x}${" "}`)}</span>
          <h1 className="post-heading">{post.frontmatter.title}</h1>
          <span className="post-author">{post.frontmatter.author} </span>
        </div>

        <Row>
          <Col xl="9" l="12">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
          <Col xs="auto">.col-auto - variable width content</Col>
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        author
      }
    }
  }
`