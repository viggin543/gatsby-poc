import React from 'react'
import { graphql } from 'gatsby'

export default ({ data: post }) => (
  <>
    <h1>{post.markdownRemark.frontmatter.titlet} </h1>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </>
)

// this query happens on load of component
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
