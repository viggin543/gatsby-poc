import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    netlifyIdentity.init()
  }, []);
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "space-between",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <div data-netlify-identity-menu></div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
