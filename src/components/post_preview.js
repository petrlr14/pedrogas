import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Preview = styled.article`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 4px solid var(--headers);
  border-left: 3px solid var(--headers);
  margin-bottom: 1em;
  & > * {
    margin-left: 1em;
  }
`

const TagContainer = styled.section`
  & > span {
    margin: 0 0.2em;
  }
  & > span:nth-child(1) {
    margin: 0 0.2em 0 0;
  }
`

const Tag = styled.span`
  color: var(--tag-text);
  background-color: var(--tag);
  padding: 0 1em;
  border-radius: 6px;
`

export const PostPreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.frontmatter.tags.split(",")
  return (
    <Preview key={node.fields.slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
      </header>
      <section>
        <p
          style={{
            margin: 0,
          }}
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
      <TagContainer>
        {tags.map((el, index) => {
          return <Tag key={index}>{el}</Tag>
        })}
      </TagContainer>
    </Preview>
  )
}
