import React from 'react'
import PostCard from "../components/PostCard"

export default function mapPosts(posts) {
  return posts.map((x, i) => {
    let a = x.node.frontmatter.featuredImage
    if (a === null) {
      a = ''
    } else {
      a = x.node.frontmatter.featuredImage.childImageSharp.fluid.src
    }
    return <PostCard
      key={i}
      title={x.node.frontmatter.title}
      image={a}
      content={x.node.excerpt}
      path={x.node.frontmatter.path}
    />
  })
}