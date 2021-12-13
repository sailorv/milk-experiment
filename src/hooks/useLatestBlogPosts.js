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
              featuredImage {
                node {
                    altText
                    sourceUrl
                }
              }
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