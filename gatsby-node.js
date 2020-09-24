const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const Producttemplate = path.resolve("./src/templates/prodcut-template.js")

exports.onCreateNode = ({ node, getNode, actions }) => {

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "bananas" })
    actions.createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // this content happens on site generation
  const res = await graphql(`{
   allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
   allContentfulProduct {
      edges {
        node {
          slug
        }
      }
    }
  }`, { limit: 1000 })
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(({ node: post }) => {
    actions.createPage({
      path: `bananas${post.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: post.fields.slug
      }
    })
  })

  const products = res.data.allContentfulProduct.edges
  products.forEach(({ node: product }) =>{
    actions.createPage({
      path: `products${product.slug}`,
      component: Producttemplate,
      context: {
        slug: product.slug,
      }
    })
  })
}