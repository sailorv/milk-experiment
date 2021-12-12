import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPosts = () => {
    const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
        wpgraphql {
          posts {
            edges {
              node {
                title
                excerpt
                uri
                categories {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)

    return data;
}