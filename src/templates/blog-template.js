import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Row, Col } from 'reactstrap'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  const categoryPosts = data.allMarkdownRemark.edges;

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
            color: var(--header-blue);
            cursor: pointer;
          }
          .more-section a:not(:last-child) {
            margin-bottom:0.5rem;
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
            <p className="post-last-edit">Last edited {post.parent.modifiedTime}</p>
          </Col>
          <Col xl="3" l="12">
            <div className="more-section center-column">
              <h3>More {post.frontmatter.category_name}</h3>
              {
                categoryPosts.map(x => {
                  const a = x.node.frontmatter;
                  return <Link to={a.path}>{a.title}</Link>
                })
              }
            </div>
          </Col>
        </Row>

      </div>

    </Layout>
  )
}
/*
BlogPostTemplate.propTypes = {
  data: propTypes.shape({
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        category_name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        category_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.object,
        category: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
    allMarkdownRemark: PropTypes.object,
  }),
}

*/
export default BlogPostTemplate;

export const pageQuery = graphql`
query BlogPostByID($id: String!, $category: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      category_name
      date(formatString: "MMMM DD, YYYY")
      title
      tags
      category
      category_name
      author
    }
    parent {
      ... on File {
        modifiedTime(fromNow: true)
      }
    }
  }
  allMarkdownRemark(limit: 10, sort: {order: DESC, fields: id}, filter: {frontmatter: {category: {eq: $category}}}) {
    edges {
      node {
        frontmatter {
          path
          title
        }
      }
    }
  }
}
`