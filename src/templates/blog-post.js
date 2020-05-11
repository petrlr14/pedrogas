import React, { useContext } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { OrderContext } from "./../context/contexts"
import OrderOptions from "./../utils/OrderOptions"
import { CommentInput } from "../components/comment_input"
import { Comments } from "../components/comment"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const { value } = useContext(OrderContext)

  const renderLinks = () => {
    let prev, nxt
    if (value === OrderOptions.DESC) {
      prev = next ? { ...next } : null
      nxt = previous ? { ...previous } : null
    } else {
      prev = previous ? { ...previous } : null
      nxt = next ? { ...next } : null
    }
    return (
      <>
        <li>
          {prev && (
            <Link
              to={prev.fields.slug}
              rel="prev"
              style={{ textDecoration: "none" }}
            >
              ← {prev.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {nxt && (
            <Link
              to={nxt.fields.slug}
              rel="next"
              style={{ textDecoration: "none" }}
            >
              {nxt.frontmatter.title} →
            </Link>
          )}
        </li>
      </>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header style={{ color: `var(--headers)` }}>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
            backgroundColor: "var(--hyper)",
          }}
        />
        <footer>
          <Bio />
          <CommentInput id={post.id} />
          <Comments id={post.id} />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {renderLinks()}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "es")
        description
      }
    }
  }
`
