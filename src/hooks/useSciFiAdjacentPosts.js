import { useStaticQuery, graphql } from "gatsby";

export const useSciFiAdjacentPosts = () => {
    const data = useStaticQuery(graphql`
    query SciFiAdjacentPostsQuery {
      wpgraphql {
        posts(where: {categoryIn: "8"}) {
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