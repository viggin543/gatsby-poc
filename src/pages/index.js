import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
      <Layout>
          <SEO title="Home"/>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image/>
          </div>
          <Link to="/page-2/">Go to page 2</Link> <br/>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
          <Link to="/posts/hello">hello"</Link> <br/>
          {data.allMarkdownRemark.edges.map(({ node }, i) =>
            <><Link to={`bananas${node.fields.slug}`}>Go to {node.fields.slug}</Link> <br/></>
          )}
      </Layout>
    )
}

export default IndexPage
