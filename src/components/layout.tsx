import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Header from './header'
import Nav from './Nav'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import stripes from '../assets/images/stripes.svg'

const ContentStyled = styled.div`
  background: white;
  padding: 2rem;
  margin: 0 auto;
`

const SiteBorderStyled = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(
    2rem,
    10vw,
    12rem
  ); //todo: css clamp ( min 2rem, max 12rem otherwise 10vw ( view points ) - this will scale the background according to page scale
  // margin appears twice on purpose because some browsers dont support clamp

  background: white url(${stripes});
  background-size: 10rem;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.44);
  border: 5px solid white;
  @media (max-width: 1100px) {
    //todo: media query !
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

const Footer = function () {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}
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
      <GlobalStyles />
      <SiteBorderStyled>
        <ContentStyled>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Nav />
          <main>{children}</main>
          <Footer />
        </ContentStyled>
      </SiteBorderStyled>
    </>
  )
}

export default Layout
