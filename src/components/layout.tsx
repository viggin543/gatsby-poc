import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import Nav from './Nav'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <GlobalStyles />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Nav />
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
