import React from "react"
import { graphql } from "gatsby"
import "../components/layout"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({data}) => (
  <Layout>
    <h1>{data.contentfulProduct.name} </h1>
    <Img fluid={data.contentfulProduct.image.fluid} />
  </Layout>
)

export const query = graphql`
    query ($slug: String!) {
        contentfulProduct(slug: {eq: $slug}){
            name
            image{
                fluid{
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }

        }
    }`