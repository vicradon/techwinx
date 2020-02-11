const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              tags
              templateKey
              path
              category
            }
            id
          }
        }
      }
    }      
  `)

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    const category = edge.node.frontmatter.category
    createPage({
      path: edge.node.frontmatter.path,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        category
      },
    })
  })

 
  

  /*
  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if ((edge [`node.frontmatter.tags`]) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = Array.from(new Set(tags));

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${tag}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    })
  })
  */
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      featuredImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}