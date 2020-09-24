import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Message from '../components/message'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Message />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
