import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavStyled = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    text-align: center;
    list-style: none;

    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1; //media query ?
    &:nth-child(1) {
      --rotate: 1deg;
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
