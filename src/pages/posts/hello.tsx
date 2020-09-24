import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const GET_SITE_META = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          name
        }
      }
    }
    allContentfulProduct {
      totalCount
      edges {
        node {
          name
          description
          price
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(GET_SITE_META)
  return (
    <>
      <h1> this is fun {data.site.siteMetadata.title} </h1>
      {data.allFile.edges.map(({ node }: { node: any }, i: any) => (
        <div key={i}>{node.name}</div>
      ))}
      <p> count: {data.allContentfulProduct.totalCount}</p>
      {data.allContentfulProduct.edges.map(({ node }: any, i: number) => (
        <Img key={i} fluid={node.image.fluid} />
      ))}
    </>
  )
}
