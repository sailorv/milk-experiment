import { useStaticQuery, graphql } from "gatsby"

export const useBytes = () => {
  const data = useStaticQuery(graphql`
    query BytesQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "bytes" } } } }
        }
        sort: { order: DESC, fields: date }
      ) {
        edges {
          node {
            title
            content
            bytesFields {
              bytesBookAuthor
              bytesDate
              bytesPurchaseLink
              bytesRelatedArticle {
                ... on WpPost {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  return data
}
