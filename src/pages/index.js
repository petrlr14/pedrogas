import React, { useState } from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostPreview } from "../components/post_preview"
import { Select } from "../components/select"
import OrderOptions from "./../utils/OrderOptions"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [posts, setPost] = useState(data.allMarkdownRemark.edges)

  const changeOrder = value => {
    const postsSorted = posts.sort((a, b) => {
      switch (value) {
        case OrderOptions.ASC:
          return a.node.frontmatter.rawDate < b.node.frontmatter.rawDate
            ? 1
            : -1
        default:
          return a.node.frontmatter.rawDate > b.node.frontmatter.rawDate
            ? 1
            : -1
      }
    })
    setPost([...postsSorted])
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Bio />
      <Select changeOrder={changeOrder} />
      {posts.map(({ node }) => {
        return <PostPreview node={node} key={node.id} />
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "es")
            rawDate: date
            title
            description
            tags
          }
        }
      }
    }
  }
`
