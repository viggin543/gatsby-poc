import React from "react"
import { graphql } from "gatsby"
import "../components/layout"
import Layout from "../components/layout"

export default ({data: post}) => (
  <Layout>
    <h1>{post.markdownRemark.frontmatter.titlet} </h1>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}/>
  </Layout>
)

// this query happens on load of component
export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: {
          slug: {eq : $slug}
      }){
          html,
          frontmatter {
              title
          }
      }
  }`