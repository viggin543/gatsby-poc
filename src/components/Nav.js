import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

// todo: css start by styling top container and reach inside with nested queries
// only if some parts become reusable extract them to a seperate styled comp
const NavStyled = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(
      -25%
    ); //todo: css pull element up without adding it any margin or padding. nice
  }
  ul {
    padding: 0;
    display: grid;
    text-align: center;
    list-style: none;
    margin: -6rem 0 0;

    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;
  }
  li {
    --rotate: -2deg; // todo: local css variable
    transform: rotate(var(--rotate));
    order: 1; //will be used in a media query ?
    &:nth-child(1) {
      //todo: css trick to rotate a bit on hover, nice.
      --rotate: 1deg; //todo: override local css variable to update rotate ( in order to not override all the transform property )
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
    &:nth-child(2) {
      --rotate: 2.5deg;
    }
    a {
      font-size: 3rem;
      text-decoration: none;
      colo&:hover {
        color: var(--red);
      }
      &[aria-current='page'] {
        //todo: css selector of current link
        color: var(--red);
      }
    }
  }
`

export default function Nav(props) {
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
    <NavStyled>
      <ul>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/page-3/">Go to page 3</Link>
        </li>
        <li>
          <Logo />
        </li>
        <li>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </li>
        <li>
          <Link to="/posts/hello">hello</Link>
        </li>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <Link key={node.fields.slug} to={`/bananas${node.fields.slug}`}>
              {node.fields.slug}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyled>
  )
}
