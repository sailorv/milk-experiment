/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const result = await graphql(`
    query GetPostsPages {
      wpgraphql {
        posts {
          edges {
            node {
              uri
              id
            }
          }
        }
      }
    }
  `)
  
  const BlogPosts = result.data.wpgraphql.posts.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/blog${post.node.uri}`,
      component: BlogPostTemplate,
      context: {
        id: `${post.node.id}`
      },
    })
  })
}