import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import "../components/layout"
import Layout from "../components/layout"
import Img from "gatsby-image"
import netlifyIdentity from "netlify-identity-widget"

export default ({ data }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const user = netlifyIdentity.currentUser()
    netlifyIdentity.on("login", user => console.log(user))
    netlifyIdentity.on("logout", user => console.log(user))
    setLoggedIn(user !== null)
  }, [])
  return (
    <Layout>
      <h1>{data.contentfulProduct.name} </h1>
      <p>user is logged in :{`${loggedIn}`}</p>
      <Img fluid={data.contentfulProduct.image.fluid}/>
    </Layout>
  )
}

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