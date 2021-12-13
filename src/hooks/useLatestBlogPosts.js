import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPosts = () => {
    const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      wpgraphql {
        posts(where: {categoryNotIn: "8"}) {
          edges {
            node {
              title
              uri
              excerpt
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