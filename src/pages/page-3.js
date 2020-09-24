import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Messages from "../components/message"

const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Messages/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
