/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const CategoryTemplate = path.resolve("./src/templates/CategoryPage.js")

  const result = await graphql(`
    query GetPostsPages {
      wpgraphql {
        categories {
          edges {
            node {
              uri
              id
            }
          }
        }
      }
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {nin: "bytes"}}}}}) {
        edges {
          node {
            id
            uri
          }
        }
      }
    }  
  `)
  
  const BlogPosts = result.data.allWpPost.edges
  const Categories = result.data.wpgraphql.categories.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/blog${post.node.uri}`,
      component: BlogPostTemplate,
      context: {
        id: `${post.node.id}`
      },
    })
  })
  Categories.forEach(category => {
    createPage({
      path: `${category.node.uri}`,
      component: CategoryTemplate,
      context: {
        id: `${category.node.id}`
      },
    })
  })
}