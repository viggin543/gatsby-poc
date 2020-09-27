import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import PizzaList from '../components/PizzaList'

// todo: there's never a loading state in gatsby ecause its always pre built
// no need to add a loading spinner to get the data of the images
const PizzasPage = ({ data: { pizzas } }) => (
  <>
    <SEO title="Pizzas" />
    <PizzaList pizzas={pizzas.nodes} />
    <Link to="/">Go back to the homepage</Link>
  </>
)
// todo: query executed in build time

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      #todo:   graphql rename -> pizzas is a rename of allSanityPizza ( will be availabe in the component)
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
              # todo: graphql fragment from the sanity plugin
            }
          }
        }
      }
    }
  }
`

export default PizzasPage
